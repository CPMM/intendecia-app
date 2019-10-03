import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:Usuario;
  constructor(
    private _usuario:UsuarioService,
    private _login:LoginService,
    private _toastr:ToastrService,
    private router:Router
  ) { 
    this.usuario = new Usuario('','','','','','','','',false);
  }

  ngOnInit() {
    if(sessionStorage.getItem('usuario')){
      this.router.navigate(['/inicio']);
    }
  }

  entrar(){
    this._login.login(this.usuario).subscribe(
      res=>{
        this._toastr.success(res['message'], 'Correcto!');
        console.log(res['description']);
        sessionStorage.setItem('usuario',JSON.stringify(res['description']));
        location.reload();
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }

}
