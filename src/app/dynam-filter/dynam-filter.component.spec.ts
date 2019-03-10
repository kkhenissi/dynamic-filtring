import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamFilterComponent } from './dynam-filter.component';

describe('DynamFilterComponent', () => {
  let component: DynamFilterComponent;
  let fixture: ComponentFixture<DynamFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
