import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chand',
  templateUrl: './chand.component.html',
  styleUrls: ['./chand.component.css']
})
export class ChandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  name:string = 'Chand';
  age:number = 21;

  customer = {
    a : 101,
    b : 'Basha',
    c : true,
    d : [20, 21, 22],
    e : [[101,'sam'], [102,'hari'], [103,'mahesh']],
    
  }



}
