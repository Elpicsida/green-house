import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-admin-view',
  templateUrl: './gallery-admin-view.component.html',
  styleUrls: ['./gallery-admin-view.component.scss']
})
export class GalleryAdminViewComponent {
  public url: string;

  constructor(
    public dialogRef: MatDialogRef<GalleryAdminViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: string}) {
      this.url = data.url;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
