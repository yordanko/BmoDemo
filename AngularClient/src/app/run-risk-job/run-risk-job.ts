import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-run-risk-job',
  imports: [CommonModule],
  templateUrl: './run-risk-job.html',
  styleUrl: './run-risk-job.css'
})
export class RunRiskJob {
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
