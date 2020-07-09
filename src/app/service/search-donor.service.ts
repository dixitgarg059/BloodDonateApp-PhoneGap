import { Injectable } from '@angular/core';
import { SearchDonor } from '../models/search-donor-model';
import {LocationsService} from './locations.service';

@Injectable({
  providedIn: 'root'
})
export class SearchDonorService extends LocationsService {
  private donorsList: SearchDonor[];
  constructor() {
    super();
    this.donorsList = [
      {
        Id: 1,
        Name: 'Name1',
        BloodGroup: 'BloodGroup1',
        Address: 'Address1',
        Phone: '1234'
      },
      {
        Id: 2,
        Name: 'Name2',
        BloodGroup: 'BloodGroup2',
        Address: 'Address2',
        Phone: '1234'
      },
      {
        Id: 3,
        Name: 'Name3',
        BloodGroup: 'BloodGroup3',
        Address: 'Address3',
        Phone: '12345'
      }
    ]
  }

  searchDonors(): SearchDonor[] {
    return this.donorsList;
  }
}
