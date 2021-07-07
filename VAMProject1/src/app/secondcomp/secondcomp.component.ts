import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']
})
export class SecondcompComponent implements OnInit {

  product:any=[]
  products:any=[
  {"pId":4,"pName":"Football","cost":5000},
  {"pId":5,"pName":"Bat","cost":2000},
  {"pId":6,"pName":"Shoes","cost":2500}
 ]


  constructor(private dataService:DataserviceService) {
    dataService.currentMsg.subscribe(successMsg => this.product = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){
     for(var i=0;i<this.products.length;i++){
    this.dataService.changeData(this.products[i])
     }
  }


}
