import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'destination-page',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationPageComponent implements OnInit {

  public width: number;

  constructor() { 
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWidth();
  }

  ngOnInit() {
    this.resizeWidth();
  }

  private resizeWidth(): void {
    let bodyWidth = document.body.clientWidth - 32;
    this.width = bodyWidth > 1068 ? 1068 : bodyWidth;
  }
}
