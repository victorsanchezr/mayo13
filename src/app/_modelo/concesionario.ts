export class concesionario {
  id: number = 0;
  nombre: string = "";
  stock: string = "";
  fecha_venta: string = "";
  fecha_compra: string = "";
  edad: number = 0;

   

  

    constructor(
      id: number,
      nombre:string,
      stock: string,
      fecha_venta: string,
      fecha_compra: string,
      edad: number
    
      ) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.fecha_venta = fecha_venta;
        this.fecha_compra = fecha_compra;
        this.edad = edad;
      
      }




}