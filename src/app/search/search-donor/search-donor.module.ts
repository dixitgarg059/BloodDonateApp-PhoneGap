import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDonorPageRoutingModule } from './search-donor-routing.module';

import { SearchDonorPage } from './search-donor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDonorPageRoutingModule
  ],
  declarations: [SearchDonorPage]
})
export class SearchDonorPageModule {}
