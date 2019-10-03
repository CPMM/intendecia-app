import { Component, OnInit } from '@angular/core';
import { TareaAreaService } from '../../../services/tarea-area.service';
import { TareaRealizada } from '../../../models/tarea-realizada';
import { TareaRealizadaService } from '../../../services/tarea-realizada.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';
import { TareaArea } from '../../../models/tarea-area';

@Component({
  selector: 'app-inicio-intendente',
  templateUrl: './inicio-intendente.component.html',
  styleUrls: ['./inicio-intendente.component.css']
})
export class InicioIntendenteComponent implements OnInit {

  public intendente:Usuario;
  public tareasArea:TareaArea[];
  public tareasRalizadasDia:TareaRealizada[];

  constructor(
    private _tareaArea:TareaAreaService,
    private _tareaRealizada:TareaRealizadaService,
    private _toastr:ToastrService
  ) { 
    this.tareasRalizadasDia = [];
  }

  ngOnInit() {
    this.intendente = JSON.parse(sessionStorage.getItem('usuario'));
    this.getTareas();
    this.getRealizadasDia();
  }

  getTareas(){
    this._tareaArea.getTareasXintendente(this.intendente._id).subscribe(
      res=>{
        this.tareasArea = res['description'];
        console.log(this.tareasArea);
      },
      err=>{
        this._toastr.error(err['error']['message'],'Error!');
      }
    )
  }

  getRealizadasDia(){
    this._tareaRealizada.getTareaXintendenteXHoy(this.intendente._id).subscribe(
      res=>{
        this.tareasRalizadasDia = res['description'];
        console.log(this.tareasRalizadasDia);
      },
      err=>{
        this._toastr.error(err['error']['message'],'Error!');
      }
    )
  }

}
