import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColumnComponent } from './footer-column.component';

describe('FooterColumnComponent', () => {
  let component: FooterColumnComponent;
  let fixture: ComponentFixture<FooterColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
