import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchDonorService } from 'src/app/service/search-donor.service';
import { SearchDonor } from 'src/app/models/search-donor-model';
import { State } from 'src/app/models/state';
import { CitiesList, City } from 'src/app/models/city';
import { DonorDetailsPage } from './donor-details-page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.page.html',
  styleUrls: ['./search-donor.page.scss'],
})
export class SearchDonorPage implements OnInit {
  public noDonorsFound: boolean = false;
  public statesList: State[];
  public citiesList: City[];
  private counter: number = 0;
  public AvailableDonors: SearchDonor[] = [];
  public selectedSearchOptions: SelectedSearchOptions = {
    BloodGroup: '',
    City: 0,
    PageLoaded: true,
    State: 0,
    SearchBtnClicked: false,
  };

  constructor(private searchDonorService: SearchDonorService, private modalController: ModalController) { }


  async showDonorDetails(donor: SearchDonor, selectedState: string, selectedCity: string) {

    const modal = await this.modalController.create({
      component: DonorDetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'donorDetails': donor,
        'state': selectedState,
        'city': selectedCity
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.statesList = this.searchDonorService.getStates();
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

  searchBloodDonorsClick(e: Event) {
    if (e) e.preventDefault();
    //console.log('State:', this.selectedSearchOptions.State, 'City:', this.selectedSearchOptions.City, 'BloodGroup:', this.selectedSearchOptions.BloodGroup);
    if (this.selectedSearchOptions.State !== 0 && this.selectedSearchOptions.City !== 0 && this.selectedSearchOptions.BloodGroup != '') {
      this.selectedSearchOptions.SearchBtnClicked = true;
      this.searchDonorService.searchDonors(this.selectedSearchOptions.State, this.selectedSearchOptions.City, this.selectedSearchOptions.BloodGroup).then(donors => {
        this.AvailableDonors = donors.filter(x => {
          return x.BloodDonationOption != 'NoDonationWish';
        });
        this.noDonorsFound = this.AvailableDonors.length > 0;
      }, reason => {
        console.log(reason);
        this.AvailableDonors = [];
        this.noDonorsFound = true;
      }).finally(() => {
        this.selectedSearchOptions.SearchBtnClicked = false;
        this.noDonorsFound = this.AvailableDonors.length <= 0;
      });
    }
  }
}

interface SelectedSearchOptions {
  BloodGroup: string,
  City: number,
  PageLoaded: boolean,
  State: number,
  SearchBtnClicked: boolean,
}
