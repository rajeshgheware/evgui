import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './requests/request.component';
import { UiFeaturesComponent } from './ui-features.component';
const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [{
    path: 'request',
    component: RequestComponent,
  },],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }

