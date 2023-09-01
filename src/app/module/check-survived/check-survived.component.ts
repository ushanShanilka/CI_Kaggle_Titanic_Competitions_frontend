import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-survived',
  templateUrl: './check-survived.component.html',
  styleUrls: ['./check-survived.component.scss']
})
export class CheckSurvivedComponent implements OnInit  {

  detailForm!: FormGroup;
  apiResponse = false;

  labelPosition: 'male' | 'female' = 'male';

  constructor(private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.detailForm = this.formBuilder.group({
      passengerId: ['', Validators.required],
      pclass: ['', Validators.required],
      age: ['', Validators.required],
      sibSp: ['', Validators.required],
      parch: ['', Validators.required],
      Fare: ['', Validators.required],
      pEmbarked: ['', Validators.required]
    });
  }
}
