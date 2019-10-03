import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { TareaRealizada } from '../models/tarea-realizada';

@Injectable({
  providedIn: 'root'
})
export class TareaRealizadaService {
  public url:string
  constructor(
    private _http:HttpClient
  ) { 
    this.url = GLOBAL.server + 'tarearealizada/';
  }

  public addTarea(tarea:TareaRealizada){
    return this._http.post(this.url,tarea);
  }

  public updateTarea(tarea:TareaRealizada){
    return this._http.put(this.url+tarea._id, tarea);
  }

  public getTareas(){
    return this._http.get(this.url)
  }

  public getTarea(id:string){
    return this._http.get(this.url + id)
  }

  public getTareaXintendente(intendente:string){
    return this._http.get(this.url + 'intendente/' + intendente);
  }

  public getTareaXintendenteXHoy(intendente:string){
    return this._http.get(this.url + 'intendente/dia/' + intendente);
  }

  public addQueja(id_tarea,comentario:string){
    return this._http.put(this.url + 'queja/' + id_tarea, {comentario});
  }

  public subirFotografias(id_tarea, fotos:File[]){
    let newurl = GLOBAL.server + 'foto/tarearealizada/' + id_tarea;
    let form:FormData = new FormData();
    for (let i = 0; i < fotos.length; i++) {
      form.append('foto'+i,fotos[i],fotos[i].name);
    }
    return this._http.put(newurl, form);
  }


  public subirFotografiasQuejas(id_tarea, foto:File){
    console.log('asdskkjjasdhiashd');
    let newurl = GLOBAL.server + 'foto/queja/' + id_tarea;

    let form:FormData = new FormData();
    form.append('foto',foto,foto.name);

    return this._http.put(newurl, form);
  }
}
