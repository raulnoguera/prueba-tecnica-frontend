import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { Microservice } from '../microservice.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: any[] = []; 


  constructor(private service: Microservice, private location: Location) { }
  chart: any;

  ngOnInit(): void {
    this.obtenerConteoGeneros();
    //this.createBarChart();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    ctx.width = 800; // Ajusta el ancho del canvas
    ctx.height = 400; // Ajusta la altura del canvas
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
  
  volverAtras() {
    this.location.back();
  }
  obtenerConteoGeneros(): void {
    this.service.obtenerConteoGeneros().subscribe(
      data => {
        this.resultados = data;
      },
      error => {
        console.error('Error al obtener el conteo de géneros', error);
      }
    );
  }
}

