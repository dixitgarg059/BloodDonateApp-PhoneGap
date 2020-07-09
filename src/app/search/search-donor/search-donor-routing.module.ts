import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDonorPage } from './search-donor.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDonorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDonorPageRoutingModule {}
