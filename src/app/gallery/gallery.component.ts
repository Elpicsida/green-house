import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[] = [];
    public noImages: boolean;

    constructor(private galleryService: GalleryService) { }

    async ngOnInit(): Promise<void> {

        this.galleryOptions = [
          {  
            width: '800px',
            height: '600px',
            "previewCloseOnClick": true, 
            "previewCloseOnEsc": true, 
            "previewKeyboardNavigation": true,
            "previewSwipe": true,
            "thumbnailsSwipe": true,
            "imageAnimation": NgxGalleryAnimation.Slide,
            "imageSwipe": true },
          { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 5 },
          { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
          ];

        const items = await this.galleryService.getGalleryItems();
        this.noImages = items.length == 0;
        items.map(x => {
            this.galleryImages.push({
                small: x.Url,
                medium: x.Url,
                big: x.Url
            })
        });
    }
}