import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component  {

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
