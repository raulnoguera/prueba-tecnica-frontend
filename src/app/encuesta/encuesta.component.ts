import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Microservice } from '../microservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  estiloMusical: string = ''; 
  correoElectronico: string = '';

  constructor(private service: Microservice, private snackBar: MatSnackBar, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  enviarEncuesta() {

    const encuestaData = {
      estiloMusical: this.estiloMusical,
      correoElectronico: this.correoElectronico
    };
    
    this.service.verificarEmailExistente(this.correoElectronico)
    .subscribe(
      emailExistente => {
        if (emailExistente) {
          this.mostrarMensajeError('El correo electrónico ya está registrado');
        } else {
          this.guardarEncuesta();
        }
      },
      error => {
        console.error('Error al realizar la solicitud POST', error);
       
        this.snackBar.open('Error al registrar la encuesta', 'Cerrar', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['error-snackbar']
        });
      }
     
    );

    
  }

  volverAtras() {
    this.location.back();
  }
  
  
  private mostrarMensajeError(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['error-snackbar']
    });
  }

  private guardarEncuesta() {
    this.service.enviarEncuesta(this.estiloMusical, this.correoElectronico)
        .subscribe(
          response => {
            console.log('Solicitud POST exitosa', response);
            // Mostrar mensaje de éxito con diseño personalizado
            this.snackBar.open('Encuesta registrada exitosamente', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['success-snackbar'] // Agrega una clase CSS personalizada
            });
          }
        );
        this.router.navigate(['/resultados']);
      }
}
