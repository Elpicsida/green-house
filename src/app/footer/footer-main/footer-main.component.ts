import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../../models/link.model';
import { FooterItem } from '../../../models/footer-item.model';

@Component({
  selector: 'footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss']
})
export class  FooterMainComponent implements OnInit {

  private FollowUsOn: FooterItem = {
    Title: 'Follow Us',
    Links: [
      { 
      Label: 'Instagram',
      Url: 'http://instagram.com'
    },
    { 
      Label: 'Facebook',
      Url: 'http://facebook.com'
    }]
  };

  private AboutCity: FooterItem = {
    Title: 'Krasnobród',
    Links: [
      { 
        Label: 'Dinosaur\'s Park',
        Url: 'http://dino.com'
      },
      { 
        Label: 'Museum Sacral\'s Art',
        Url: 'http://facebook.com'
      },
      { 
        Label: 'Birdsland',
        Url: 'http://facebook.com'
      },
      { 
        Label: 'Park Linowy',
        Url: 'http://facebook.com'
      },
      { 
        Label: 'Zalew',
        Url: 'http://facebook.com'
      },
      { 
        Label: 'Kapliczka',
        Url: 'http://facebook.com'
      }
    ]
  }

  private Contact: FooterItem = {
    Title: 'Contact',
    Links: [
      { 
        Label: 'Mobile Phone',
        IconName: 'phone'
      },
      { 
        Label: '533-623-162'
      },
    { 
      Label: '',
      Url: 'http://facebook.com'
    }]
  };


  constructor() { }

  ngOnInit() {
  }

}
