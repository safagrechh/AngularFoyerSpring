import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactionComponent } from './updateaction.component';

describe('UpdateactionComponent', () => {
  let component: UpdateactionComponent;
  let fixture: ComponentFixture<UpdateactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
