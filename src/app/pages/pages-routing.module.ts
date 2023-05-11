import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'clientes', component: ClientesComponent },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesRoutingModule { }
