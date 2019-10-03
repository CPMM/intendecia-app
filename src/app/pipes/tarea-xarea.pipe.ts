import { Pipe, PipeTransform } from '@angular/core';
import { TareaArea } from '../models/tarea-area';

@Pipe({
  name: 'tareaXArea'
})
export class TareaXAreaPipe implements PipeTransform {

  transform(items:TareaArea[] , id_area:string): any {
    if(!id_area || id_area=='') return items;
    let newItems:Array<TareaArea> = [];
    for(let i=0;i<items.length;i++){
      if(items[i]['area']['_id'] == id_area){
        newItems.push(items[i]);
      }
    }
    return newItems;
  }

}
