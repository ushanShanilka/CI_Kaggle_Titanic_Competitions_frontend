import { Component, OnInit } from '@angular/core';
import {ApiLoadingService} from "../../../core/service/api-loading.service";

@Component({
  selector: 'app-api-loading',
  templateUrl: './api-loading.component.html',
  styleUrls: ['./api-loading.component.scss']
})
export class ApiLoadingComponent implements OnInit {

  constructor(public apiLoadingService: ApiLoadingService) { }

  ngOnInit(): void {
  }

}
