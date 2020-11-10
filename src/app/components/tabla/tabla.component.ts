import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  nombre: string = 'Jose Sakuda';
  nombre2: string = 'JoSE SAKudA';

  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje: number = 0.234;
  salario:number = 12345.2;
  fecha: Date = new Date();
  idioma: string = '';
  videoUrl: string = 'https://www.youtube.com/watch?v=7f0CfWNc5tQ';
  pass: string = 'HOLAAAAAAAAAAAAAAAA'
  activar: boolean = true;

  objetoPersona = {
    nombre: 'Jose',
    apellido: 'Sakuda',
    edad: 34,
    direccion:{
      calle: 'Avenida siempre viva',
      casa: 4
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
