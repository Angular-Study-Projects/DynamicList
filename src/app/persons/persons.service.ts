import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[] = [];
  isEmpty: boolean = true;

  listIsEmpty() {
    if( this.persons.length === 0 ){
      this.isEmpty = true;
    }
    else {
      this.isEmpty = false;
    }
  }

  addPerson(name: string) {
    if( name != "" ) {
      this.persons.push(name);
      this.personsChanged.next(this.persons);
    }
    this.listIsEmpty();
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
    console.log(this.persons)
    this.listIsEmpty();
  }
}
