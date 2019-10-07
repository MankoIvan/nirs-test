import { Component } from '@angular/core';
import { FiguresService } from './shared/figures.service';
var faker = require('faker');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nirs-test';
  
  figures = [];

  constructor(private figuresService: FiguresService) {
    this.figures = this.figuresService.array;
    let interval = setInterval(() => this.figuresService.changeItem(faker.random.number(this.figuresService.i - 1)), 80);
  }

  
}
