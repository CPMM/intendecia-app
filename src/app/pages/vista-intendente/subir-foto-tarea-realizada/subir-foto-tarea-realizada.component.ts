import { Component, OnInit } from '@angular/core';
import { TareaRealizada } from 'src/app/models/tarea-realizada';
import { ToastrService } from 'ngx-toastr';
import { TareaRealizadaService } from '../../../services/tarea-realizada.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subir-foto-tarea-realizada',
  templateUrl: './subir-foto-tarea-realizada.component.html',
  styleUrls: ['./subir-foto-tarea-realizada.component.css']
})
export class SubirFotoTareaRealizadaComponent implements OnInit {

  public id_tarea:string;
  public fotos:File[];

  constructor(
    private _tareaRealizada:TareaRealizadaService,
    private _toastr:ToastrService,
    private _route:ActivatedRoute
  ) { 
    this.fotos = [];
  }

  ngOnInit() {
    this.id_tarea = this._route.snapshot.paramMap.get('id');
  }
  
  addFotoArray(foto:File){
    this.fotos.push(foto);
  }

  subirFotos(){
    this._tareaRealizada.subirFotografias(this.id_tarea,this.fotos).subscribe(
      res=>{
        this.fotos = [];
        this._toastr.success(res['message']);
      },
      err=>{
        this._toastr.error(err['error']['message']);
        console.log(err);
      }
    )
  }

}
