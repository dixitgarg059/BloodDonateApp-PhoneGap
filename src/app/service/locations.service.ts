import { Injectable } from '@angular/core';
import { State, StatesList } from '../models/state';
import { City, CitiesList } from '../models/city';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private totalStates: State[] = [];
  private totalCities: City[] = [];
  private counter: number = 0;
  constructor() { }

  getStates(): State[] {
    this.counter = 0;
    StatesList.forEach((state: string) => {
      this.totalStates.push({ id: this.counter, name: state.trim() });
      this.counter = this.counter + 1;
    });
    return this.totalStates;
  }

  getCities(stateId: number): City[] {
    this.counter = 0;
    let cityList: City[] = [];
    CitiesList[stateId].split("|").forEach((city: string) => {
      cityList.push({ id: this.counter, name: city.trim(), });
      this.counter = this.counter + 1;
    });
    return cityList;
  }
}
