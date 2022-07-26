import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { IndiceClienteComponent } from './clientes/indice-cliente/indice-cliente.component';
import { EsAdminGuard } from './es-admin.guard';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';

const routes: Routes = [
  { path: '', component: IndiceClienteComponent },
  {
    path: 'clientes',
    component: IndiceClienteComponent,
  },
  {
    path: 'clientes/crear',
    component: CrearClienteComponent,
  },
  {
    path: 'clientes/editar/:id',
    component: EditarClienteComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'usuarios',
    component: IndiceUsuariosComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
