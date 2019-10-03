import { Component, OnInit } from '@angular/core';
import { Area } from '../../models/area';
import { AreaService } from '../../services/area.service';
import { TareaAreaService } from '../../services/tarea-area.service';
import { ToastrService } from 'ngx-toastr';
import { TareaArea } from '../../models/tarea-area';
import { GLOBAL } from '../../global';
declare var $:any;

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  public p:number=1;
  public busqueda:string;

  public area_nueva:Area;
  public area:Area;
  public areas:Area[];

  //tareas
  public tareas:TareaArea[];
  public tarea_nueva:TareaArea

  //añadir fotos a area
  public fotos:File[] = [];
  public url:string;

  //busqueda
  public busqeda:string;

  constructor(
    private _area:AreaService,
    private _tareaArea:TareaAreaService,
    private _toastr:ToastrService,
  ) { 
    this.area = new Area('','','',[],false);
    this.area_nueva = new Area('','','',[],false);
    this.tarea_nueva = new TareaArea('','','','','','',false);
    this.url = GLOBAL.server + 'foto';
  }

  ngOnInit() {
    this.getAreas();
    this.getTareas();
  }
  
  public getAreas(){
    this._area.getAreas().subscribe(
      res=>{
        this.areas = res['description'];
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }

  public addArea(){
    this._area.addArea(this.area_nueva).subscribe(
      res=>{
        this._toastr.success(res['message'],'Correcto!');
        this.getAreas();
        this.area_nueva = new Area('','','',[],false);
        $('#addAreaModal').modal('hide');
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }
  public updateArea(){
    this._area.updateArea(this.area).subscribe(
      res=>{
        this._toastr.success(res['message'],'Correcto!');
        this.getAreas();
        $('#modificarModal').modal('hide');
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }
  public getTareas(){
    this._tareaArea.getTareas().subscribe(
      res=>{
        this.tareas = res['description'];
        console.log(this.tareas)
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }

  public addTarea(){
    this.tarea_nueva.area = this.area._id;
    this._tareaArea.addTarea(this.tarea_nueva).subscribe(
      res=>{
        this._toastr.success(res['message'],'Correcto!');
        this.getTareas();
        this.tarea_nueva = new TareaArea('','','','','','',false);
        $('#addTareaModal').modal('hide');
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }

  public seleccionar(id){
    for (let i = 0; i < this.areas.length; i++) {
      if(this.areas[i]._id == id) return this.area = this.areas[i];
    }
  }



  changeFoto(foto){
    this.fotos.push(foto);
  }


  deleteFoto(i){
    this.fotos.splice(i,1);
  }

  addFotoArea(){
    this._area.addFotoArea(this.area._id,this.fotos).subscribe(
      res=>{
        this._toastr.success(res['message']);
        $('#addfotomodal').modal('hide');
        this.getTareas();
        this.fotos = [];
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }

}

