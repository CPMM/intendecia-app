import { Component, OnInit } from '@angular/core';
import { TareaRealizada } from '../../models/tarea-realizada';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareaRealizadaService } from '../../services/tarea-realizada.service';
import { GLOBAL } from '../../global';
import { TareaArea } from 'src/app/models/tarea-area';
import * as moment from 'moment'
import { TareaAreaService } from '../../services/tarea-area.service';
import { Usuario } from '../../models/usuario';
declare var $:any;


@Component({
  selector: 'app-tarea-realizada-informacion',
  templateUrl: './tarea-realizada-informacion.component.html',
  styleUrls: ['./tarea-realizada-informacion.component.css']
})
export class TareaRealizadaInformacionComponent implements OnInit {


  public id_tarea:string;
  public tarea:TareaRealizada;
  public tareaArea:TareaArea;
  public url:string;

  public comentario_queja:string;
  public foto_queja:File;

  public usuario:Usuario;


  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _toastr:ToastrService,
    private _tareaRealizada:TareaRealizadaService,
    private _tareaArea:TareaAreaService
  ){
    this.url = GLOBAL.server + 'foto';
    this.tareaArea =  new TareaArea('','','','','','',false);
    this.tarea = new TareaRealizada('','','','',[],'',{});
    this.comentario_queja = '';
  }

  ngOnInit(){
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.id_tarea = this._route.snapshot.paramMap.get('id');
    this.getTarea();
  }

  getTarea(){
    this._tareaRealizada.getTarea(this.id_tarea).subscribe(
      res=>{
        this.tarea = res['description'];
        console.log(this.tarea);
        // this.getTareaArea();
      },
      err=>{
        this._toastr.error(err['error']['message'],'Error!');
      }
    )
  }

  getTareaArea(){
    console.log(this.tarea.tarea['area']);
    this._tareaArea.getTarea(this.tarea.tarea['area']).subscribe(
      res=>{
        this.tareaArea = res['description'];
        console.log(this.tareaArea);
      },
      err=>{
        this._toastr.error(err['error']['message'],'Error!');
      }
    )
  }

  addQueja(){
    this._tareaRealizada.addQueja(this.id_tarea, this.comentario_queja).subscribe(
      res=>{
        this._toastr.success(res['message']);
        $("#quejamodal").modal('hide');
        this.getTarea();
      },
      err=>{
        this._toastr.error(err['error']['message']);
      }
    )
  }

  changeFotoQueja(foto?:File){
    this.foto_queja = foto;
    console.log(this.foto_queja);
  }

  addFotoQueja(){ 
    this._toastr.warning('Guardando fotografia de queja','Espere');
    this._tareaRealizada.subirFotografiasQuejas(this.id_tarea, this.foto_queja).subscribe(
      res=>{
        this._toastr.success('Foto guardada');
        $("#fotomodal").modal('hide');
        this.getTarea();
      },
      err=>{
        this._toastr.error(err['error']['message']);
      }
    )
  }

}

