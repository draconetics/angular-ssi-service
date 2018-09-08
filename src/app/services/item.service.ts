import { Injectable } from '@angular/core';
import {ITEMS} from '../shared/items';
import {Item} from '../shared/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }

}
