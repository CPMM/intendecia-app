import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { TareaArea } from '../models/tarea-area';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaAreaService {
  public url:string
  constructor(
    private _http:HttpClient
  ) { 
    this.url = GLOBAL.server + 'tareaarea/';
  }

  public addTarea(tarea:TareaArea){
    return this._http.post(this.url,tarea);
  }

  public updateTarea(tarea:TareaArea){
    return this._http.put(this.url+tarea._id, tarea);
  }

  public getTareas(){
    return this._http.get(this.url)
  }

  public getTarea(id:string){
    return this._http.get(this.url + 'id/' +  id);
  }

  public getTareasSinAsignar(){
    return this._http.get(this.url + 'sinasignar');
  }

  public getTareasAsignadas(){
    return this._http.get(this.url + 'asiganadas');
  }

  public getTareasXintendente(id:string){
    return this._http.get(this.url + 'intendente/' + id);
  }

  public asignar(tarea:TareaArea){
    return this._http.put(this.url + 'asignar/' + tarea._id, tarea);
  }

  public desasignar(id_tarea){
    return this._http.put(this.url + 'desasignar/' + id_tarea,{});
  }
}
