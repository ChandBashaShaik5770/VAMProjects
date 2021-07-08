import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component  {
  employees:any
  filteredString:string='';
  errMsg:any;
  constructor(empService:EmployeeService){
    empService.getEmpInfo().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
}
  
}
