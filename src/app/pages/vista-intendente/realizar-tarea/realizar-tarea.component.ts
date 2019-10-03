import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareaAreaService } from '../../../services/tarea-area.service';
import { TareaArea } from '../../../models/tarea-area';
import { TareaRealizadaService } from 'src/app/services/tarea-realizada.service';
import { TareaRealizada } from '../../../models/tarea-realizada';
import { Usuario } from '../../../models/usuario';
import * as moment from 'moment';
import { GLOBAL } from '../../../global';

@Component({
  selector: 'app-realizar-tarea',
  templateUrl: './realizar-tarea.component.html',
  styleUrls: ['./realizar-tarea.component.css']
})
export class RealizarTareaComponent implements OnInit {


  public intendente: Usuario;
  public id_tarea: string;
  public tarea: TareaArea;
  public tareaRealizada: TareaRealizada;

  public url:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService,
    private _tareaArea: TareaAreaService,
    private _tareaRealizada: TareaRealizadaService,
  ) {
    this.tareaRealizada = new TareaRealizada('', '', '', '', [], '', {});
    this.url = GLOBAL.server + 'foto';
  }

  ngOnInit() {
    this.intendente = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(this.intendente);
    this.id_tarea = this._route.snapshot.paramMap.get('id');
    if (this.id_tarea) this.getTareaArea();
  }

  getTareaArea() {
    this._tareaArea.getTarea(this.id_tarea).subscribe(
      res => {
        this.tarea = res['description'];
      },
      err => {
        this._toastr.error(err['error']['message'], 'Error!');
      }
    )
  }



  verSiRealizada() {
    if (this.tarea && this.tarea['fecha_ultima']) {
      if (this.tarea.fecha_ultima == moment().format('YYYY-MM-DD')) {
        return true;
      }
    }
    return false;
  }

  realizar() {
    this.tareaRealizada.tarea = this.id_tarea;
    this.tareaRealizada.intendente = this.intendente._id;
    this._tareaRealizada.addTarea(this.tareaRealizada).subscribe(
      res => {
        this._toastr.success(res['message']);
        let realizada: TareaRealizada = res['description'];
        this._router.navigate(['subirFotosTareaRealizada', realizada._id]);
      },
      err => {
        this._toastr.error(err['error']['message']);
        console.log(err);
      }
    )
  }



}
