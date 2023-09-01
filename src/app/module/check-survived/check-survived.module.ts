import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckSurvivedRoutingModule } from './check-survived-routing.module';
import { CheckSurvivedComponent } from './check-survived.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CheckSurvivedComponent
  ],
  imports: [
    CommonModule,
    CheckSurvivedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class CheckSurvivedModule { }
