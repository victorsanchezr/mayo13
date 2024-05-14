import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { entorno } from '../_entorno/entorno';
import { HttpClient } from '@angular/common/http';
import { concesionario } from '../_modelo/concesionario';

@Injectable({
  providedIn: 'root'
})
export class concesionarioServicio {
private url:string = `${entorno.HOTS}/concesionario`;
concesionarioCambio = new Subject<concesionario[]>();

listarPorId(id:number){
  return this.http.get<concesionario>(`${this.url}/${id}`);
}

listar(): Observable<concesionario[]>{
  return this.http.get<concesionario[]>(this.url);
}

alta(e:concesionario){
  
  return this.http.post(this.url,e);
}

eliminar(id:number){

  return this.http.delete(`${this.url}/${id}`);
}

modificar(e:concesionario){
  return this.http.put(this.url,e);
}





  constructor(private http:HttpClient) { }
}
