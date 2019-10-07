import { Injectable } from '@angular/core';
var faker = require('faker');

export interface Figure {
    name: string,
    color: string/* ,
    width: number,
    height: number */
}

@Injectable({providedIn: 'root'})



export class FiguresService {
    i = 100;
    array = new Array(this.i).fill(null).map(function(item, index) {
        return {
            name: faker.name.findName(),
            color: faker.internet.color(),
            width: faker.random.number(100),
            height: faker.random.number(100)
        }
    });
    changeItem(index) {
        let item = this.array[index]
        item.name = faker.name.findName(),
        item.color = faker.internet.color(),
        item.width = faker.random.number(100),
        item.height = faker.random.number(100)
        console.log(this.getInfo(index));
    }
    getInfo(index) {
        return this.array[index];
    }
}