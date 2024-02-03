import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
countryList:Country[]=[
  new Country('1','India'),
  new Country('2','UK'),
  new Country('3','Germany'),
  new Country('4','Singapore')
]
onSubmit(form:NgForm){
  
}
}
class Country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
