import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAnalisisComponent } from './sales-analisis.component';

describe('SalesAnalisisComponent', () => {
  let component: SalesAnalisisComponent;
  let fixture: ComponentFixture<SalesAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
