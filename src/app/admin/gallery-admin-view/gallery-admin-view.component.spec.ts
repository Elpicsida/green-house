import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdminViewComponent } from './gallery-admin-view.component';

describe('GalleryAdminViewComponent', () => {
  let component: GalleryAdminViewComponent;
  let fixture: ComponentFixture<GalleryAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
