import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckSurvivedComponent } from './check-survived.component';

const routes: Routes = [{ path: '', component: CheckSurvivedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckSurvivedRoutingModule { }
