import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacerequestComponent } from './placerequest.component';

describe('PlacerequestComponent', () => {
  let component: PlacerequestComponent;
  let fixture: ComponentFixture<PlacerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacerequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
