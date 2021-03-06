import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent  {

  employees:any = []
  errMsg:any;
  constructor(empService:EmployeesService){
    empService.getEmployeesInfo().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
  }


}
