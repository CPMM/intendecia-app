import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Area } from '../models/area';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  public url:string
  constructor(
    private _http:HttpClient
  ) { 
    this.url = GLOBAL.server + 'area/';
  }

  public addArea(area:Area){
    return this._http.post(this.url,area);
  }

  public updateArea(area:Area){
    return this._http.put(this.url+area._id, area);
  }

  public getAreas(){
    return this._http.get(this.url)
  }

  public addFotoArea(id_area:string, fotos:File[]){
    let newUrl:string = GLOBAL.server + 'foto/area/' + id_area;
    let form:FormData = new FormData();
    for (let i = 0; i < fotos.length; i++) {
      let element = fotos[i];
      form.append('foto',element,element.name);
    }
    return this._http.put(newUrl, form);
  }
}
