import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {

  product:any=[]
  products:any=[
  {"pId":1,"pName":"Laptop","cost":50000},
  {"pId":2,"pName":"Mobile","cost":20000},
  {"pId":3,"pName":"Ipad","cost":25000}
 ]

  constructor(private dataService:DataserviceService) {

  }
  ngOnInit(): void {
    this.dataService.currentMsg.subscribe(successMsg => this.product = successMsg)
   }
  modifiedData(){

    for(var i=0;i<this.products.length;i++){
      this.dataService.changeData(this.products[i])
       }

}
}
