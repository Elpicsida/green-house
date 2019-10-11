import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsAdminComponent } from './reservations-admin.component';

describe('ReservationsAdminComponent', () => {
  let component: ReservationsAdminComponent;
  let fixture: ComponentFixture<ReservationsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
