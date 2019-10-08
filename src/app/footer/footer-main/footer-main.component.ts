import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../../models/link.model';
import { FooterItem } from '../../../models/footer-item.model';

@Component({
  selector: 'footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss']
})
export class  FooterMainComponent implements OnInit {

  public AboutCity: FooterItem = {
    Title: 'Krasnobród',
    Links: [
      { 
        Label: 'attractions.dinosaur-park',
        Url: 'http://www.dinozaury-krasnobrod.pl/pl'
      },
      { 
        Label: 'attractions.museum-sacral-art',
        Url: 'https://pl.sflcode.com/hotel-widget/aMYc97iPEjPC5GpmJrspYVSs/1/58433'
      },
      { 
        Label: 'attractions.aviary',
        Url: 'https://www.polskieszlaki.pl/ptaszarnia-w-krasnobrodzie.htm'
      },
      { 
        Label: 'attractions.rope-park',
        Url: 'http://linowypark.pl/'
      },
      { 
        Label: 'attractions.lagoon',
        Url: 'http://www.magiczneroztocze.pl/turystyka/atrakcje/7-zalew-w-krasnobrodzie'
      },
      { 
        Label: 'attractions.chapel',
        Url: 'http://www.magiczneroztocze.pl/turystyka/atrakcje/4-kapliczka-na-wodzie'
      },
      {
        Label: "attractions.calvary",
        Url: "https://www.polskieszlaki.pl/kalwaria-krasnobrodzka.htm"
      },
      {
        Label: "attractions.church",
        Url: "https://www.polskieszlaki.pl/kosciol-nawiedzenia-nmp-w-krasnobrodzie.htm"
      }], 
  }

  public Contact: FooterItem = {
    Title: 'footer.contact',
    Links: [
      { 
      Label: 'Miejsce',
      
    }, {
      Label: 'ul. Lelewela 167'
    },
    {
      Label: '22-440 Krasnobród'
    },
    {
      Label: 'woj. lubelskie'
    },
    { 
      Label: 'Mobile Phone'
      //IconName: 'phone'
    },
    { 
      Label: '605-287-874'
    },
    {
      Label: '698-411-296'
    }]
  };


  constructor() { }

  ngOnInit() {
  }

}
