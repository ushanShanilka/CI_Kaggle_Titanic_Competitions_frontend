import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ApiLoadingComponent} from "./api-loading/api-loading.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    ApiLoadingComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers:[],
  exports: [
    ApiLoadingComponent
  ],
})
export class SharedModule { }
