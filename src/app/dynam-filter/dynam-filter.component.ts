import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Field, fields } from './../field';

@Component({
  selector: 'app-dynam-filter',
  templateUrl: './dynam-filter.component.html',
  styleUrls: ['./dynam-filter.component.css']
})
export class DynamFilterComponent implements OnInit {
  fields$: Observable<Field[]>;
  filteredFields$: Observable<Field[]>;
  filter: FormControl;
  filter$: Observable<string>;

  constructor(private http: HttpClient) { 
     this.fields$ = of(fields);
     this.filter = new FormControl('');
     this.filter$ = this.filter.valueChanges.pipe(startWith(''));
     this.filteredFields$ = combineLatest(this.fields$, this.filter$).pipe(
         map(([fields, filterString]) => fields.filter(field => field.name.indexOf(filterString) != -1))
     );

  }

  ngOnInit() {
  }

}
