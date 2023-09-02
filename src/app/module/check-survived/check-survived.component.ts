import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CheckSurvivedService} from "../../core/service/check-survived.service";
import {ApiLoadingService} from "../../core/service/api-loading.service";
import {MatDialog} from "@angular/material/dialog";
import {AlertDialogComponent} from "../../core/dialoag/alert-dialog/alert-dialog.component";
import {ApprovalDialogConfig} from "../../core/dialoag/alert-dialog/ApprovalDialogConfig";

@Component({
  selector: 'app-check-survived',
  templateUrl: './check-survived.component.html',
  styleUrls: ['./check-survived.component.scss']
})
export class CheckSurvivedComponent implements OnInit {

  detailForm!: FormGroup;

  sex: string[] = ['Male', 'Female'];

  constructor(private formBuilder: FormBuilder,
              private checkSurvivedService: CheckSurvivedService,
              private apiLoadingService: ApiLoadingService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.detailForm = this.formBuilder.group({
      passengerId: ['', Validators.required],
      passengerClass: ['', Validators.required],
      age: ['', Validators.required],
      sibSp: ['', Validators.required],
      parch: ['', Validators.required],
      fare: ['', Validators.required],
      pEmbarked: ['', Validators.required],
      sex: ['Male', Validators.required],
    });
  }

  submit() {
    if (this.detailForm.valid){
      let embarked = this.detailForm.get('pEmbarked')?.value;
      let sex = this.detailForm.get('sex')?.value;
      this.checkSurvivedService.predict(
        {
          'data': [
            Number(this.detailForm.get('passengerId')?.value),
            Number(this.detailForm.get('passengerClass')?.value),
            Number(this.detailForm.get('age')?.value),
            Number(this.detailForm.get('sibSp')?.value),
            Number(this.detailForm.get('parch')?.value),
            Number(this.detailForm.get('fare')?.value),
            embarked == 'cherub' ? 1 : 0,
            embarked == 'southampton' ? 1 : 0,
            embarked == 'queenstown' ? 1 : 0,
            sex == 'Female' ? 1 : 0,
            sex == 'Male' ? 1 : 0
          ]
        }
      ).subscribe(res => {
        this.dialog.open(AlertDialogComponent, {
          width: '350px',
          data: new ApprovalDialogConfig(res == 1 ? 'Passenger Survived' : 'Passenger Died',res == 1)
        }).afterClosed().subscribe(res => {
          this.detailForm.reset()
        })
      })
    }
  }
}
