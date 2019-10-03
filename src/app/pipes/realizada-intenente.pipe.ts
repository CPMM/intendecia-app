import { Pipe, PipeTransform } from '@angular/core';
import { TareaRealizada } from '../models/tarea-realizada';

@Pipe({
  name: 'realizadaIntenente'
})
export class RealizadaIntenentePipe implements PipeTransform {

  transform(items:TareaRealizada[], intendente:string): any {
    if(!intendente || intendente == '') {
      return items;
    }
    
    let newItems = []; 
    for (let i = 0; i < items.length; i++) {
      const element = items[i]['intendente']['_id'];
      if(element == intendente){
        newItems.push(items[i]);
      }
    }

    return newItems;
  }

}
