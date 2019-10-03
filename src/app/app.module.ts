import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MODULOS IMPORTADOS
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//SERVICIOS
import { AreaService } from './services/area.service';
import { TareaAreaService } from './services/tarea-area.service';
import { UsuarioService } from './services/usuario.service';
import { TareaRealizadaService } from './services/tarea-realizada.service';

//PIPES
import { RealizadaDesdeFechaPipe } from './pipes/realizada-desde-fecha.pipe';
import { RealizadaHastaFechaPipe } from './pipes/realizada-hasta-fecha.pipe';
import { RealizadaIntenentePipe } from './pipes/realizada-intenente.pipe';
import { RealizadaAreaPipe } from './pipes/realizada-area.pipe';
import { TareaXAreaPipe } from './pipes/tarea-xarea.pipe';
import { TareaXusuarioPipe } from './pipes/tarea-xusuario.pipe';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { BusquedaUsuarioPipe } from './pipes/busqueda-usuario.pipe';
import { BusquedaAreaPipe } from './pipes/busqueda-area.pipe';

//NGX-PAGINATION
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

//COMPONENTES
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AreasComponent } from './pages/areas/areas.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { AsignarTareaComponent } from './pages/asignar-tarea/asignar-tarea.component';
import { InicioIntendenteComponent } from './pages/vista-intendente/inicio-intendente/inicio-intendente.component';
import { TareasIntendenteComponent } from './pages/vista-intendente/tareas-intendente/tareas-intendente.component';
import { RealizarTareaComponent } from './pages/vista-intendente/realizar-tarea/realizar-tarea.component';
import { SubirFotoTareaRealizadaComponent } from './pages/vista-intendente/subir-foto-tarea-realizada/subir-foto-tarea-realizada.component';
import { TareaRealizadaIntendenteComponent } from './pages/vista-intendente/tarea-realizada-intendente/tarea-realizada-intendente.component';
import { TareaRealizadaInformacionComponent } from './pages/tarea-realizada-informacion/tarea-realizada-informacion.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    UsuariosComponent,
    AreasComponent,
    TareasComponent,
    TareaXAreaPipe,
    AsignarTareaComponent,
    TareaXusuarioPipe,
    InicioIntendenteComponent,
    TareasIntendenteComponent,
    RealizarTareaComponent,
    SubirFotoTareaRealizadaComponent,
    TareaRealizadaIntendenteComponent,
    TareaRealizadaInformacionComponent,
    RealizadaDesdeFechaPipe,
    RealizadaHastaFechaPipe,
    RealizadaIntenentePipe,
    RealizadaAreaPipe,
    BusquedaPipe,
    BusquedaUsuarioPipe,
    BusquedaAreaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    AreaService,
    TareaAreaService,
    UsuarioService,
    TareaRealizadaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
