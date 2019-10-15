import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/models/image.model';
import { MatDialog } from '@angular/material/dialog';
import { GalleryAdminViewComponent } from '../gallery-admin-view/gallery-admin-view.component';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-admin',
  templateUrl: './gallery-admin.component.html',
  styleUrls: ['./gallery-admin.component.scss']
})
export class GalleryAdminComponent implements OnInit {

  private width: number;
  public galleryItems: ImageModel[] = [];
  public isNewItemCreating: boolean;

  constructor(public dialog: MatDialog, private galleryService: GalleryService) {
    this.resizeWidth();
  }
  
  ngOnInit() {
    this.galleryService.getGalleryItems().then((items : ImageModel[]) => {
        this.galleryItems = items;
    });
  }
  
    openDialog(url: string): void {
      const dialogRef = this.dialog.open(GalleryAdminViewComponent, {
        width: this.width.toString(),
        data: {url: url}
      });
    }

    public async saveChanges(): Promise<void> {
      console.log(this.galleryItems);
      var el = this.galleryItems.filter(x => x.Id === -1)[0];
      if (el.Url) {
        this.isNewItemCreating = false;
        var result = await this.galleryService.createGalleryItem(el);
        el.Id = result.Id;
      }
    }
  
    public addNewItem(): void {
      this.galleryItems.unshift({Id: -1, Url: ''});
      this.isNewItemCreating = true;
    }
  
    public deleteItem(index: number): void {
      let galleryItem = this.galleryItems.splice(index, 1)[0];
      this.galleryService.deleteGalleryItem(galleryItem.Id);
    }

    private resizeWidth(): void {
      let bodyWidth = document.body.clientWidth - 32;
      this.width = bodyWidth > 1068 ? 1068 : bodyWidth;
    }
}
