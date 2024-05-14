import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { concesionarioServicio } from '../../_servicio/concesionario.service';
import { concesionario } from '../../_modelo/concesionario';


@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {

  id: number = 0;
  edicion: boolean = false;

  miformulario:FormGroup;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private servicio: concesionarioServicio){
    
    this.miformulario = new FormGroup({
      id:new FormControl(),
      nombre:new FormControl("",[Validators.required,Validators.minLength(5)]),
      stock:new FormControl("",[Validators.required]),
      edad:new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')]),
      fecha_venta:new FormControl(),
      fecha_compra:new FormControl(),

     
  
    });


  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.formaFormulario();
    });
  }

  formaFormulario() {
    if (this.edicion) {
      this.servicio.listarPorId(this.id).subscribe(data => {
        this.miformulario.patchValue(data); 
      });
    }
  }

  onSubmit() {
    let p: concesionario = this.miformulario.value;
    if (this.edicion) {
      this.servicio.modificar(p).subscribe(() => {
        this.servicio.listar().subscribe(data => {
          this.servicio.concesionarioCambio.next(data);
        });
      });
    } else {
      this.servicio.alta(p).subscribe(() => {
        this.servicio.listar().subscribe(data => {
          this.servicio.concesionarioCambio.next(data);
        });
      });
    }
    this.router.navigate(['']);
  }
  
  

}
