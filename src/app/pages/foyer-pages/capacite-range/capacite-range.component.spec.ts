import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaciteRangeComponent } from './capacite-range.component';

describe('CapaciteRangeComponent', () => {
  let component: CapaciteRangeComponent;
  let fixture: ComponentFixture<CapaciteRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapaciteRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapaciteRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
