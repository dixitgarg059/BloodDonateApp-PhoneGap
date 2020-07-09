import { Component, OnInit } from '@angular/core';
import { SearchDonorService } from '../../service/search-donor.service';
import { SearchDonor } from 'src/app/models/search-donor-model';
import { State } from '../../models/state';
import { CitiesList, City } from 'src/app/models/city';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.page.html',
  styleUrls: ['./search-donor.page.scss'],
})
export class SearchDonorPage implements OnInit {

  private searchDonorsList: SearchDonor[];
  public statesList: State[];
  public citiesList: City[];
  private counter: number = 0;
  public selectedSearchOptions: SelectedSearchOptions = { BloodGroup: '', City: '', State: '' };
  constructor(private searchDonorService: SearchDonorService) { }

  ngOnInit() {
    this.statesList = this.searchDonorService.getStates();
    this.searchDonorsList = this.searchDonorService.searchDonors();
  }

  getCities(e) {
    if (e) e.preventDefault();
    this.counter = 0;
    let cities: City[] = [];
    CitiesList[this.selectedSearchOptions.State].split('|').forEach(cityName => {
      cities.push({ id: this.counter, name: cityName.trim() });
      this.counter = this.counter + 1;
    });
    this.citiesList = cities;
  }

  searchBloodDonorsClick(e) {
    if (e) e.preventDefault();
    // alert(this.statesList[this.selectedSearchOptions.State].name);
    // alert(this.selectedSearchOptions.City);
    // alert(this.selectedSearchOptions.BloodGroup);
        
  }
}

interface SelectedSearchOptions {
  State: any,
  City: string,
  BloodGroup: string
}
