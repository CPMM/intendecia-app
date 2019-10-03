import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { TareaRealizada } from '../models/tarea-realizada';

@Pipe({
  name: 'realizadaHastaFecha'
})
export class RealizadaHastaFechaPipe implements PipeTransform {

  transform(items:TareaRealizada[], fecha): any {

    if(!fecha || fecha==''){
      return items;
    }

    fecha = fecha.replace('-',''); 
    
    let newItems = [];
    for (let i = 0; i < items.length; i++) {
      const element = items[i].fecha.substring(0,10);
      let fecha_tesis = items[i].fecha.substring(0,10).replace('-',''); 
      if(fecha_tesis <= fecha){
          newItems.push(items[i]);
      }
    }

    return newItems;
  }

}
