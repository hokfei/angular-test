import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../types';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {

  filters: FormGroup;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: [''],
      author: [''],
      region: [''],
      date: [''],
      age: ['22']
    });
  }

  ngOnInit(): void {
  }

  formSubmitted(): void {
    console.log(this.filters.value);
  }
}
