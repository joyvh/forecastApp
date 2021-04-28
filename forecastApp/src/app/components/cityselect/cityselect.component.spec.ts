import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityselectComponent } from './cityselect.component';

describe('CityselectComponent', () => {
  let component: CityselectComponent;
  let fixture: ComponentFixture<CityselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
