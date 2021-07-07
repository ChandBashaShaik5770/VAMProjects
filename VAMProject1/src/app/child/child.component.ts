import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Input() cuname:string=" ";
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  sendDataFromChildToParent(){
    this.notify.emit('Child Data sending from Child Component')
  }

}
