import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkshetComponent } from './markshet.component';

describe('MarkshetComponent', () => {
  let component: MarkshetComponent;
  let fixture: ComponentFixture<MarkshetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkshetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkshetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
