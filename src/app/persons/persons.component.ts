import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.less']
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubs: Subscription;
  emptyList: boolean;

  constructor(private prsService: PersonsService) {

  }

  ngOnInit() {
    this.emptyList = this.prsService.isEmpty;
    this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
    if(this.personList == []) {
      this.emptyList = true;
    }
    this.emptyList = this.prsService.isEmpty;
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
