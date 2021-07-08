import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChandComponent } from './chand/chand.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AttributeDirsComponent } from './attribute-dirs/attribute-dirs.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { FilterpipePipe } from './filterpipe.pipe';
import { SortPipe } from './sort.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { CalculatorcompComponent } from './calculatorcomp/calculatorcomp.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';

import { SearchpipePipe } from './searchpipe.pipe';
import { SortcoursepipePipe } from './sortcoursepipe.pipe';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';





@NgModule({
  declarations: [
    AppComponent,
    ChandComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StructDirectivesComponent,
    CalculatorComponent,
    ProductComponent,
    AttributeDirsComponent,
    MycolorDirective,
    FilterpipePipe,
    SortPipe,
    ParentComponent,
    ChildComponent,
    ParentcompComponent,
    ChildcompComponent,
    CalculatorcompComponent,
    FirstComponent,
    SecondComponent,
    JavaComponent,
    WebComponent,
    routingComponents,
    FirstcompComponent,
    SecondcompComponent,
    
    SearchpipePipe,
    SortcoursepipePipe,
    TempDrivenFormComponent,
    TemplateDrivenFormComponent,
    Employee1Component,
    Employee2Component,
    
    
    
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, TechRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
