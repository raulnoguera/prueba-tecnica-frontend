import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Germany', 'USA', 'France'],
        datasets: [{
          label: 'Population',
          data: [83000000, 328000000, 67000000],
          backgroundColor: ['red', 'blue', 'green']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
