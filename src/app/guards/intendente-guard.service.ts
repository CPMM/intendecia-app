import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class IntendenteGuardService {
  
  constructor(
    private _router:Router
  ) { }

  canActivate(){
    if(sessionStorage.getItem('usuario')){
      let usuario:Usuario = JSON.parse(sessionStorage.getItem('usuario'));
      console.log(usuario);
      if (usuario.role != 'intendente'){
        return true;
      }
    }else{
      this._router.navigate(['/login'])
    }
    return false;
  }
}
