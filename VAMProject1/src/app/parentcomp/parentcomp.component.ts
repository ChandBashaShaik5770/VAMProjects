import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent  {

  title = 'Chand';
  counter = 1000;
 
  countHandler(count: number) {
    this.counter = count;
    console.log(count);
  }
  

}
