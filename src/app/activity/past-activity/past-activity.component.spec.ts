import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastActivityComponent } from './past-activity.component';

describe('PastActivityComponent', () => {
  let component: PastActivityComponent;
  let fixture: ComponentFixture<PastActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
