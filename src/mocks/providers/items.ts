import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Driving Licence",
    "dayCount": "20",
  };


  constructor() {
    let items = [
      {
        "name": "Driving Licence",
        "dayCount": "20",
        "alertColor": "red"
      },
      {
        "name": "Medical Card",
        "dayCount": "30",
        "alertColor": "orange"
      },
      {
        "name": "Annual Review",
        "dayCount": "40",
        "alertColor": "green"
      },
      {
        "name": "Truck/Bit Inspection",
        "dayCount": "20",
        "alertColor": "red"
      },
      {
        "name": "Truck/DOT Annual",
        "dayCount": "70",
        "alertColor": "orange"
      },
      {
        "name": "Truck/Registration",
        "dayCount": "20",
        "alertColor": "green"
      },
      {
        "name": "Trailor/Bit Inspection",
        "dayCount": "30",
        "alertColor": "red"
      },
      {
        "name": "Trailor/DOT Annual",
        "dayCount": "20",
        "alertColor": "orange"
      },
      {
        "name": "Trailor/Registration",
        "dayCount": "26",
        "alertColor": "green"
      },
      {
        "name": "Ifta Permit",
        "dayCount": "20",
        "alertColor": "red"
      },
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
