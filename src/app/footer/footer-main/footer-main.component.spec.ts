import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainComponent } from './footer-main.component';

describe('FooterComponent', () => {
  let component: FooterMainComponent;
  let fixture: ComponentFixture<FooterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
