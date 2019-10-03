import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { ToastrService } from 'ngx-toastr';
import { TareaArea } from '../../models/tarea-area';
import { TareaAreaService } from '../../services/tarea-area.service';
declare var $:any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public p:number=1;
  public busqueda:string;


  public usuarios:Usuario[];
  public usuario_nuevo:Usuario;
  public usuario_select:Usuario;
 //usuario seleccionado para modificar etc

  public tareas:TareaArea[];

  //busqueda
  public busqeda:string;
  
  constructor(
    private _router:Router,
    private _toastr:ToastrService,
    private _usuario:UsuarioService,
    private _tareas:TareaAreaService
  ) { 
    this.usuario_select = new Usuario('','','','','','','','',false);
    this.usuario_nuevo = new Usuario('','','','','','','','',false);
  }

  ngOnInit() {
    this.getUsuarios();
    this.getTareas();
  }

  getUsuarios(){
    this._usuario.getUsuarios().subscribe(
      res=>{
        this.usuarios = res['description'];
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }

  public addUsuario(){
    this._usuario.addUsuario(this.usuario_nuevo).subscribe(
      res=>{
        this._toastr.success(res['message'],'Correcto!');
        this.getUsuarios();
        $('#addUsuarioModal').modal('hide');
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }
  public updateUsuario(){
    this._usuario.updateUsuario(this.usuario_select).subscribe(
      res=>{
        this._toastr.success(res['message'],'Correcto!');
        this.getUsuarios();
        $('#modificarModal').modal('hide');
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }
  public getTareas(){
    this._tareas.getTareasAsignadas().subscribe(
      res=>{
        this.tareas = res['description'];
        console.log(this.tareas);
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }

  public seleccionar(id:string){
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i]._id == id) this.usuario_select = this.usuarios[i];
    }
  }

}
