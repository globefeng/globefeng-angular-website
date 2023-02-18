import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingChartComponent } from './programming-chart.component';

describe('ProgrammingChartComponent', () => {
  let component: ProgrammingChartComponent;
  let fixture: ComponentFixture<ProgrammingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
