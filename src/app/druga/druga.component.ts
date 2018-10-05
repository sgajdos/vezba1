import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-druga',
  templateUrl: './druga.component.html',
  styleUrls: ['./druga.component.css']
})
export class DrugaComponent implements OnInit {

  strings: string[];

  constructor() {
    this.strings = ['one', 'two', 'three'];
   }

  ngOnInit() {
  }

}
