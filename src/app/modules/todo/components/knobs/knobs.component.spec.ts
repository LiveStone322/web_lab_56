import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnobsComponent } from './knobs.component';

describe('KnobsComponent', () => {
  let component: KnobsComponent;
  let fixture: ComponentFixture<KnobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
