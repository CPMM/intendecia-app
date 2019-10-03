import { Pipe, PipeTransform } from '@angular/core';
import { TareaArea } from '../models/tarea-area';

@Pipe({
  name: 'tareaXusuario'
})
export class TareaXusuarioPipe implements PipeTransform {

  transform(items:TareaArea[] , id_usuario:string): any {
    if(!id_usuario || id_usuario=='') return items;
    let newItems:Array<TareaArea> = [];
    for(let i=0;i<items.length;i++){
      if(items[i]['intendente'] && items[i]['intendente']['_id'] == id_usuario){
        newItems.push(items[i]);
      }
    }
    return newItems;
  }

}
