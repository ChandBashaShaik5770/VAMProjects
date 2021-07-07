import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  
  title = "Calculator";
  number1:any;
  number2:any;
  result:any;

  getResult(value:any)
  {
    var value1=(Number)(this.number1)
    var value2=(Number)(this.number2)
    if(value=='+')
    this.result=value1+value2
    else if(value=='-')
    this.result=value1-value2
    else if(value=='*')
    this.result=value1*value2
    else 
    this.result=value1/value2
  }
 

}
