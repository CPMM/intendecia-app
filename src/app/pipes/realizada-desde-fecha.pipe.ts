import { Pipe, PipeTransform } from '@angular/core';
import { TareaRealizada } from '../models/tarea-realizada';

@Pipe({
  name: 'realizadaDesdeFecha'
})
export class RealizadaDesdeFechaPipe implements PipeTransform {

  transform(items:TareaRealizada[], fecha): any {

    if(!fecha || fecha==''){
      return items;
    }

    fecha = fecha.replace('-',''); 
    
    let newItems = [];
    for (let i = 0; i < items.length; i++) {
      const element = items[i].fecha.substring(0,10);
      let fecha_tesis = items[i].fecha.substring(0,10).replace('-',''); 
      console.log(fecha_tesis ,  fecha);
      if(fecha_tesis >= fecha){
          newItems.push(items[i]);
      }
    }

    return newItems;
  }

}
