import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RunRiskJob } from './run-risk-job/run-risk-job';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RunRiskJob],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
