import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {
  @Output() data = new EventEmitter<any>();
  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      driverRating : new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.data.emit(this.formGroup.value);
  }
}
