import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdminComponent } from './gallery-admin.component';

describe('GalleryAdminComponent', () => {
  let component: GalleryAdminComponent;
  let fixture: ComponentFixture<GalleryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
