import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'donorRegistration',
    pathMatch: 'full'
  },
  {
    path: 'searchDonor',
    loadChildren: () => import('./search/search-donor/search-donor.module').then( m => m.SearchDonorPageModule)
  },
  {
    path: 'donorRegistration',
    loadChildren: () => import('./donor/donor-registration/donor-registration.module').then( m => m.DonorRegistrationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
