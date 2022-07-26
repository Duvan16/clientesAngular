import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MenuComponent } from './menu/menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { FormularioClienteComponent } from './clientes/formulario-cliente/formulario-cliente.component';
import { IndiceClienteComponent } from './clientes/indice-cliente/indice-cliente.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarErroresComponent,
    ListadoGenericoComponent,
    MenuComponent,
    AutorizadoComponent,
    LandingPageComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    FormularioClienteComponent,
    IndiceClienteComponent,
    FormularioAutenticacionComponent,
    IndiceUsuariosComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SeguridadInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
