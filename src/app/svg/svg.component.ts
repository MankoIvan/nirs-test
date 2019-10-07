import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {


  @Input() figure
  
  constructor() { }

  ngOnInit() {
  }

}
