import { Routes } from '@angular/router';
import { EjemploPreguntasComponent } from './ejemplo-preguntas/ejemplo-preguntas.component';
import { OperacionesComponent } from './ejemplo-preguntas/operaciones/operaciones.component';

export const routes: Routes = [
    { path: '', component: EjemploPreguntasComponent ,children: [
        { path: 'edicion/:id', component: OperacionesComponent },
        { path: 'edicion', component: OperacionesComponent }]}
];
