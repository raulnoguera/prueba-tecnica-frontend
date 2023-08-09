import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncuestaComponent,
    ResultadosComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
