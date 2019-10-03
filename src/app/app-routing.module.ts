import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//GUARD
import { LoginGuardService } from './guards/login.service';
import { AdminGuardService } from './guards/admin-guard.service';
import { IntendenteGuardService } from './guards/intendente-guard.service';

import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { AreasComponent } from './pages/areas/areas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { AsignarTareaComponent } from './pages/asignar-tarea/asignar-tarea.component';
import { InicioIntendenteComponent } from './pages/vista-intendente/inicio-intendente/inicio-intendente.component';
import { RealizarTareaComponent } from './pages/vista-intendente/realizar-tarea/realizar-tarea.component';
import { SubirFotoTareaRealizadaComponent } from './pages/vista-intendente/subir-foto-tarea-realizada/subir-foto-tarea-realizada.component';
import { TareaRealizadaIntendenteComponent } from './pages/vista-intendente/tarea-realizada-intendente/tarea-realizada-intendente.component';
import { TareaRealizadaInformacionComponent } from './pages/tarea-realizada-informacion/tarea-realizada-informacion.component';
import { TareasIntendenteComponent } from './pages/vista-intendente/tareas-intendente/tareas-intendente.component';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate:[LoginGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate:[LoginGuardService, AdminGuardService] },
  { path: 'iniciointendente', component: InicioIntendenteComponent, canActivate:[LoginGuardService] },
  { path: 'areas', component: AreasComponent, canActivate:[LoginGuardService] },
  { path: 'usuarios', component: UsuariosComponent, canActivate:[LoginGuardService] },
  { path: 'tareas', component: TareasComponent, canActivate:[LoginGuardService] },
  { path: 'asignartareas', component: AsignarTareaComponent, canActivate:[LoginGuardService, AdminGuardService] },
  { path: 'realizarTarea/:id', component: RealizarTareaComponent , canActivate:[LoginGuardService] },
  { path: 'subirFotosTareaRealizada/:id', component: SubirFotoTareaRealizadaComponent , canActivate:[LoginGuardService] },
  { path: 'trintendente/:id', component: TareaRealizadaIntendenteComponent , canActivate:[LoginGuardService] },
  { path: 'trintendente', component: TareasIntendenteComponent , canActivate:[LoginGuardService] },
  { path: 'trintendenteadmin/:id', component: TareaRealizadaInformacionComponent , canActivate:[LoginGuardService] },
  { path: '**', component: InicioComponent, canActivate:[LoginGuardService]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
