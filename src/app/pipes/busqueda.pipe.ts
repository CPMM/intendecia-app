import { Pipe, PipeTransform } from '@angular/core';
import { TareaRealizada } from '../models/tarea-realizada';
import * as moment from 'moment';


@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(items:TareaRealizada[], args:busquedaInteface): any {
    let {busqueda, termino} = args;

    if(!busqueda || busqueda==''){
      return items;
    }
    busqueda = busqueda.toLocaleLowerCase();
    let newItems = [];
    for (let i = 0; i < items.length; i++) {
      const element = items[i]['tarea']['nombre'].toLocaleLowerCase();
      if(element.indexOf(busqueda)>=0){
        newItems.push(items[i]);
      }
    }

    return newItems;
  }

}

interface busquedaInteface{
  busqueda:string,
  termino:string
}
