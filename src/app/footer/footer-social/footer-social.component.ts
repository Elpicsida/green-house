import { Component, OnInit, Input } from '@angular/core';
import { FooterItem } from '../../../models/footer-item.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss']
})
export class FooterSocialComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
