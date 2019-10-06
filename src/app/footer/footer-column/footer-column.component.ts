import { Component, OnInit, Input } from '@angular/core';
import { FooterItem } from '../../../models/footer-item.model';

@Component({
  selector: 'footer-column',
  templateUrl: './footer-column.component.html',
  styleUrls: ['./footer-column.component.scss']
})
export class FooterColumnComponent implements OnInit {

  @Input()
  public Item: FooterItem;
  
  @Input()
  public Align: "left" | "center" | "right";
   
  constructor() { }

  ngOnInit() {
  }

}
