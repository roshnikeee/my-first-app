import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'UK'),
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  contact!: Contact;
  ngOnInit(): void {
    this.contact = {
      firstName: 'Sachin',
      lastName: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: { city: 'Mumbai', street: 'Perry Cross Rd', pincode: '400050' },
    };
  }
}
class Country {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
class Contact {
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
    pincode: string;
  }
}
