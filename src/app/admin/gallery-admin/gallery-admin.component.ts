import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-admin',
  templateUrl: './gallery-admin.component.html',
  styleUrls: ['./gallery-admin.component.scss']
})
export class GalleryAdminComponent implements OnInit {

  public galleryItems: String[] = [
    "http://test123.pl",
    "http://test356.pl"
  ];

  constructor() { }

  ngOnInit() {
  }

}
