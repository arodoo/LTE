import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [{
    titulo: 'Principal',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu: [
      {titulo:'Usuarios', url:'/usuarios', icono:'fa fa-users'},
      {titulo:'Productos', url:'/productos', icono:'fa fa-cubes'},
      {titulo:'Clientes', url:'/clientes', icono:'fa fa-users'},
    ]
  }];


  constructor() { }
}
