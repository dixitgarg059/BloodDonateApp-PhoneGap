import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { DonorRegistrationPageRoutingModule } from './donor-registration-routing.module';

import { DonorRegistrationPage } from './donor-registration.page';

import {  ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    DonorRegistrationPageRoutingModule
  ],
  declarations: [DonorRegistrationPage]
})
export class DonorRegistrationPageModule {}
