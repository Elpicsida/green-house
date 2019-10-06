import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationPageComponent } from './destination.component';

describe('DestinationPageComponent', () => {
  let component: DestinationPageComponent;
  let fixture: ComponentFixture<DestinationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
