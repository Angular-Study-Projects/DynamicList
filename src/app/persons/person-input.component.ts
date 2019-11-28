import { Component } from '@angular/core';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';
  invalidInput: boolean;
  itemCreated: boolean;

  constructor(private personsService: PersonsService) {}

  timeout(): void {
    this.itemCreated = false;
  }

  onCreatePerson() {
    if( this.enteredPersonName != '' ){
      console.log('Created a person: ' + this.enteredPersonName);
      this.personsService.addPerson(this.enteredPersonName);
      this.enteredPersonName = '';
      this.itemCreated = true;
      this.invalidInput = false;
    }
    else {
      this.itemCreated = false;
      this.invalidInput = true;
    }
    
  }
}
