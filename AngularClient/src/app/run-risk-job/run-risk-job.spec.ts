import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunRiskJob } from './run-risk-job';

describe('RunRiskJob', () => {
  let component: RunRiskJob;
  let fixture: ComponentFixture<RunRiskJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunRiskJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunRiskJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
