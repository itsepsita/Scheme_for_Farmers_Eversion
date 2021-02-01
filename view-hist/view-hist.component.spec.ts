import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistComponent } from './view-hist.component';

describe('ViewHistComponent', () => {
  let component: ViewHistComponent;
  let fixture: ComponentFixture<ViewHistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
