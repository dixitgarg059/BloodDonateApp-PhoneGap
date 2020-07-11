import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchDonorService } from '../../service/search-donor.service';
import { SearchDonor } from 'src/app/models/search-donor-model';
import { State } from '../../models/state';
import { CitiesList, City } from 'src/app/models/city';
import { DonorDetailsPage } from './donor-details-page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.page.html',
  styleUrls: ['./search-donor.page.scss'],
})
export class SearchDonorPage implements OnInit {
  //private searchingOn:boolean = false;
  //private searchDonorsList: SearchDonor[] = [];
  public statesList: State[];
  public citiesList: City[];
  private counter: number = 0;
  // public AvailableDonors: Observable<SearchDonor[]>;
  public AvailableDonors: SearchDonor[];
  public selectedSearchOptions: SelectedSearchOptions = {
    BloodGroup: '',
    City: '',
    PageLoaded: true,
    State: '',
    SearchBtnClicked: false,
  };
  constructor(private searchDonorService: SearchDonorService, private modalController: ModalController) { }


  async showDonorDetails(donor: SearchDonor) {

    const modal = await this.modalController.create({
      component: DonorDetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'donorDetails': donor,
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
    this.selectedSearchOptions.SearchBtnClicked = true;
    this.selectedSearchOptions.PageLoaded = false;
    if (this.selectedSearchOptions.State !== '' && this.selectedSearchOptions.City !== '' && this.selectedSearchOptions.BloodGroup != '') {
      //this.selectedSearchOptions.AvailableDonors = this.searchDonorService.searchDonors();
      this.searchDonorService.searchDonors(this.statesList[this.selectedSearchOptions.State].name, this.selectedSearchOptions.City, this.selectedSearchOptions.BloodGroup).then(donors => {
        this.AvailableDonors = donors;
        //alert(donors.length);
        this.selectedSearchOptions.SearchBtnClicked = false;
      }, reason => {
        console.log(reason);
        this.AvailableDonors = [];
        this.selectedSearchOptions.SearchBtnClicked = false;
      });
    }

  }
}

interface SelectedSearchOptions {
  BloodGroup: string,
  City: string,
  PageLoaded: boolean,
  State: any,
  SearchBtnClicked: boolean,
}
