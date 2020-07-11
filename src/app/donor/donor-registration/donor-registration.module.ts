import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorRegistrationPageRoutingModule } from './donor-registration-routing.module';

import { DonorRegistrationPage } from './donor-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonorRegistrationPageRoutingModule
  ],
  declarations: [DonorRegistrationPage]
})
export class DonorRegistrationPageModule {}
