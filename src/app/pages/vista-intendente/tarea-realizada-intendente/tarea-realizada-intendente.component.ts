import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareaRealizadaService } from '../../../services/tarea-realizada.service';
import { GLOBAL } from '../../../global';
import { TareaRealizada } from '../../../models/tarea-realizada';

@Component({
  selector: 'app-tarea-realizada-intendente',
  templateUrl: './tarea-realizada-intendente.component.html',
  styleUrls: ['./tarea-realizada-intendente.component.css']
})
export class TareaRealizadaIntendenteComponent implements OnInit {
  
  public id_tarea:string;
  public tarea:TareaRealizada;
  public url:string;


  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _toastr:ToastrService,
    private _tareaRealizada:TareaRealizadaService
  ){
    this.url = GLOBAL.server + 'foto';
    this.tarea = new TareaRealizada('','','','',[],'',{});
  }

  ngOnInit(){
    this.id_tarea = this._route.snapshot.paramMap.get('id');
    this.getTarea();
  }

  getTarea(){
    this._tareaRealizada.getTarea(this.id_tarea).subscribe(
      res=>{
        this.tarea = res['description'];
        console.log(this.tarea);
      },
      err=>{
        this._toastr.error(err['error']['message'],'Error!');
      }
    )
  }

}
