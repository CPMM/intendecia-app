import { Pipe, PipeTransform } from '@angular/core';
import { Area } from '../models/area';

@Pipe({
  name: 'busquedaArea'
})
export class BusquedaAreaPipe implements PipeTransform {

  transform(items:Area[], nombre:string): any {
 
    if(!nombre || nombre==''){
      return items;
    }
    nombre = nombre.toLocaleLowerCase();
    let newItems = [];
    for (let i = 0; i < items.length; i++) {
      const element = items[i]['nombre'].toLocaleLowerCase();
      if(element.indexOf(nombre)>=0){
        newItems.push(items[i]);
      }
    }

    return newItems;
  }


}
