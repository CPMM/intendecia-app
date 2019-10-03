import { Component, OnInit } from '@angular/core';
import { TareaArea } from 'src/app/models/tarea-area';
import { TareaAreaService } from '../../services/tarea-area.service';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asignar-tarea',
  templateUrl: './asignar-tarea.component.html',
  styleUrls: ['./asignar-tarea.component.css']
})
export class AsignarTareaComponent implements OnInit {

  public intendentes:Usuario[];
  public tareasA:TareaArea[];
  public tareasSA:TareaArea[];

  constructor(
    private _tareasArea:TareaAreaService,
    private _usuario:UsuarioService,
    private _toastr:ToastrService
  ){}
  
  ngOnInit(){
    this.getTareasAsignadas();
    this.getTareasSinAsignar();
    this.getIntendetes();
  }

  getTareasAsignadas(){
    this._tareasArea.getTareasAsignadas().subscribe(
      res=>{
        this.tareasA = res['description'];
        console.log('Tareas asignadas: ', this.tareasA);
      },
      err=>{
        this._toastr.error(err['error']['message']);
      }
    )
  }

  getTareasSinAsignar(){
    this._tareasArea.getTareasSinAsignar().subscribe(
      res=> {
        this.tareasSA = res['description'];
        console.log('Tareas sin asignar', this.tareasSA)
      },
      err=>{
        this._toastr.error(err['error']['message']);
      }
    )
  }

  getIntendetes(){
    this._usuario.getIntendente().subscribe(
      res=>{
        this.intendentes = res['description'];
        console.log(this.intendentes);
      },
      err=>{
        this._toastr.error(err['error']['message']);
      }
    )  
  }

  asignar(tarea:TareaArea){
    this._tareasArea.asignar(tarea).subscribe(
      res=>{
        this._toastr.success(res['message'],'Correcto!');
        this.getTareasAsignadas();
        this.getTareasSinAsignar();
      },
      err=>{
        this._toastr.error(err['error']['message'],'Error!');
      }
    )
  }

  desasignar(tarea:TareaArea){
    this._tareasArea.desasignar(tarea._id).subscribe(
      res=>{
        this._toastr.success(res['message'],'Correcto!');
        this.getTareasAsignadas();
        this.getTareasSinAsignar();
      },
      err=>{
        this._toastr.error(err['error']['message'],'Error!');
      }
    )
  }

}
