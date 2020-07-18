import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonorRegistrationPage } from './donor-registration.page';
import * as firebase from 'firebase';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const routes: Routes = [
  {
    path: '',
    component: DonorRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorRegistrationPageRoutingModule { }
