import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url:string
  constructor(
    private _http:HttpClient
  ) { 
    this.url = GLOBAL.server + 'usuario/';
  }

  public addUsuario(usuario:Usuario){
    return this._http.post(this.url,usuario);
  }

  public updateUsuario(usuario:Usuario){
    return this._http.put(this.url+usuario._id, usuario);
  }

  public getUsuarios(){
    return this._http.get(this.url)
  }
 
  public getIntendente(){
    return this._http.get(this.url + 'get/intendentes')
  }
}
