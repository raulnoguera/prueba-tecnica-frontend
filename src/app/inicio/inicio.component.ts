import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  volverAtras() {
    this.location.back();
  }
  
  irAEncuesta() {
    this.router.navigate(['/encuesta']);
  }

  irAResultados() {
    this.router.navigate(['/resultados']);
  }


}
