import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
lugares:any =[
  {nombre:'Lugar1', direccion:'Direccion 1', categoria:'1'},
  {nombre:'Lugar2', direccion:'Direccion 2', categoria:'2'}
];

  constructor(private router: Router) {}
  navegarALugar(){
    this.router.navigate(['/lugar']);
  }
  irAVistaDetalle(){
    this.router.navigate(['/lugar']);
  }
  irAVistaDetalleExistente(){

  }
}
