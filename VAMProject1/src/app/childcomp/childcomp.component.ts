import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent  {

  @Input() count:any;
 
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  mutulaFund() {
      this.count++;
      this.countChanged.emit(this.count);
    }
  stockMarket() {
      this.count--;
      this.countChanged.emit(this.count);
  }


}
