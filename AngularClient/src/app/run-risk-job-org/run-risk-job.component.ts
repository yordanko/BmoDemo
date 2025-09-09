import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-run-risk-job-org',
  template: `
    <button (click)="runRiskJob()" [disabled]="loading">
      {{ loading ? 'Running...' : 'Run Risk Job' }}
    </button>
    <div *ngIf="message">{{ message }}</div>
  `
})
export class RunRiskJobOrgComponent {
  loading = false;
  message = '';

  constructor(private http: HttpClient) {}

  runRiskJob() {
    this.loading = true;
    this.message = '';
    this.http.post('/run-risk-job', {})
      .subscribe({
        next: () => {
          this.message = 'Risk job started successfully.';
          this.loading = false;
        },
        error: (err) => {
          this.message = 'Failed to start risk job. Please try again.';
          this.loading = false;
        }
      });
  }
}