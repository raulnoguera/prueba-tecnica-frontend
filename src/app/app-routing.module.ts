import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
