import { Component, OnInit } from '@angular/core';
import { TareaRealizada } from '../../../models/tarea-realizada';
import { TareaArea } from '../../../models/tarea-area';
import { Area } from '../../../models/area';
import { Usuario } from '../../../models/usuario';
import { AreaService } from '../../../services/area.service';
import { TareaRealizadaService } from '../../../services/tarea-realizada.service';
import { TareaAreaService } from '../../../services/tarea-area.service';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tareas-intendente',
  templateUrl: './tareas-intendente.component.html',
  styleUrls: ['./tareas-intendente.component.css']
})
export class TareasIntendenteComponent implements OnInit {

  public p:number=1;


  public tareasRealizadas:TareaRealizada[];
  public tareasArea:TareaArea[];
  public areas:Area[];
  public intendentes:Usuario[];

  public filtros:filtros;
  public termino:string = 'tarea';

  public usuario:Usuario;

  constructor(
    private _area:AreaService,
    private _tareaRealizada:TareaRealizadaService,
    private _tareaArea:TareaAreaService,
    private _usuario:UsuarioService,
    private _toastr:ToastrService
  ) { 
    this.filtros = {
      nombreTarea:'',
      nombreIntendente:'',
      fechaDesde:'',
      fechaHasta:'',
      nombreArea:''
    }
  }

  quitarFiltro(filtro){
    console.log(filtro);
    if(filtro =='todos'){
      this.filtros = {
        nombreTarea:'',
        nombreIntendente:'',
        fechaDesde:'',
        fechaHasta:'',
        nombreArea:''
      }
    }else{
      this.filtros[filtro] = '';
    }
  }

  ngOnInit() {

    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));


    this.getTareaArea();
    this.getTareasRealizadas();
    this.getAreas();
    this.getIntendentes();
    
  }
  
  getTareasRealizadas(){
    this._tareaRealizada.getTareaXintendente(this.usuario._id).subscribe(
      res=>{
        this.tareasRealizadas = res['description'];
        console.log(this.tareasRealizadas);
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    );
  }

  getTareaArea(){
    this._tareaArea.getTareas().subscribe(
      res=>{
        this.tareasArea = res['description'];
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    );
  }

  getAreas(){
    this._area.getAreas().subscribe(
      res=>{
        this.areas = res['description'];
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    );
  }

  getIntendentes(){
    this._usuario.getIntendente().subscribe(
      res=>{
        this.intendentes = res['description'];
      },
      err=>{
        this._toastr.error(err['error']['message'], 'Error!');
      }
    );
  }
}


interface filtros{
  nombreTarea:string,
  nombreIntendente:string,
  fechaDesde:string,
  fechaHasta:string,
  nombreArea:string
}
