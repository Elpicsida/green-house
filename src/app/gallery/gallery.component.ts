import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

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

        this.galleryImages = [
            {
                small: 'https://thumbs.dreamstime.com/z/tv-test-image-card-rainbow-multi-color-bars-geometric-signals-retro-hardware-s-minimal-pop-art-print-suitable-89603635.jpg',
                medium: 'https://thumbs.dreamstime.com/z/tv-test-image-card-rainbow-multi-color-bars-geometric-signals-retro-hardware-s-minimal-pop-art-print-suitable-89603635.jpg',
                big: 'https://thumbs.dreamstime.com/z/tv-test-image-card-rainbow-multi-color-bars-geometric-signals-retro-hardware-s-minimal-pop-art-print-suitable-89603635.jpg'
            },
            {
              small: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
              medium: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
              big: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'
          },
          {
            small: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
            medium: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
            big: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'
        },
        {
          small: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
          medium: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
          big: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'
      },
      {
        small: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
        medium: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
        big: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'
    },
    {
      small: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
      medium: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
      big: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'
  }
        ];
    }
}