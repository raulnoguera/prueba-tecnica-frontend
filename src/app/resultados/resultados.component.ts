import { Component, OnInit } from '@angular/core';
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
  }
  
  volverAtras() {
    this.location.back();
  }
  obtenerConteoGeneros(): void {
    this.service.obtenerConteoGeneros().subscribe(
      data => {
        const labels = data.map(item => item.genero);
        const dataPoints = data.map(item => item.votos);
        const ctx = document.getElementById('barChart') as HTMLCanvasElement;
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Cantidad',
              data: dataPoints,
              backgroundColor: 'blue'
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
      },
      error => {
        console.error('Error al obtener el conteo de géneros', error);
      }
    );
  }
}

