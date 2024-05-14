import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { concesionario } from '../_modelo/concesionario';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { concesionarioServicio } from '../_servicio/concesionario.service';


@Component({
  selector: 'app-ejemplo-preguntas',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink],
  templateUrl: './ejemplo-preguntas.component.html',
  styleUrl: './ejemplo-preguntas.component.css'
})
export class EjemploPreguntasComponent {


  concesioarios:concesionario[] = [];

  constructor(private concesionarioservicio:concesionarioServicio){}


  eliminar(id: number) {
    this.concesionarioservicio.eliminar(id).pipe(
      switchMap(() => this.concesionarioservicio.listar())
    ).subscribe(data => this.concesionarioservicio.concesionarioCambio.next(data));
  }




  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.concesionarioservicio.concesionarioCambio
    .subscribe((data) => {this.concesioarios = data}
    )
 this.concesionarioservicio.listar().subscribe(data => this.concesioarios = data);
  }



}
