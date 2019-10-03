import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { GLOBAL } from '../global';

@Injectable({
    providedIn:'root'
})
export class LoginService{

    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = GLOBAL.server;
    }

    public login(usuario:Usuario){
        return this._http.post(this.url + 'login', usuario)
    }
}