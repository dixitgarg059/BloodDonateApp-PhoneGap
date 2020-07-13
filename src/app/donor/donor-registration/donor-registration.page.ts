import { Component, OnInit } from '@angular/core';
import { SearchDonor } from 'src/app/models/search-donor-model';
import { State } from '../../models/state';
import { CitiesList, City } from 'src/app/models/city';
import { Observable } from 'rxjs';
import { DonorRegistrationService } from '../../service/donor-registration.service';
import * as firebase from 'firebase';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.page.html',
  styleUrls: ['./donor-registration.page.scss'],
})
export class DonorRegistrationPage implements OnInit {

  public statesList: State[];
  public citiesList: City[];
  private counter: number = 0;
  

  public donorRegistrationDetails: DonorRegistrationDetails = {
    Name: '',
    PhoneNo: '9963599059',
    State: '',
    City: '',
    BloodGroup: '',
    BloodDonationDetails: { NeverDonated: true, DontDonate: false, LastDonatedOn: false, LastDonatedDate:''}
  };

  userPhoneNo: string = '';
  otpSent: Boolean = false;
  otp: string = '';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  user: Observable<firebase.User>;
  confirmationResult: firebase.auth.ConfirmationResult;

  constructor(public donorRegistrationService: DonorRegistrationService, public angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
    this.otpSent = false;
    this.otp = '';

  }

  ngOnInit() {
    this.statesList = this.donorRegistrationService.getStates();
  }

  ionViewDidEnter() {
    //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
  }

  getCities(e) {
    if (e) e.preventDefault();
    this.counter = 0;
    let cities: City[] = [];
    CitiesList[this.donorRegistrationDetails.State].split('|').forEach(cityName => {
      cities.push({ id: this.counter, name: cityName.trim() });
      this.counter = this.counter + 1;
    });
    this.citiesList = cities;
  }

  userSignUp() {
    //this.angularFireAuth.create
  }

  changeBloodDonationDetails(event:any){
    //console.log(e);
    //alert(e);
    console.log(event.target.value);
  }

  sendOtp() {
    //this.angularFireAuth.user
    this.angularFireAuth.signInWithPhoneNumber(this.userPhoneNo, this.recaptchaVerifier).then((confirmationResult) => {
      this.confirmationResult = confirmationResult;
      this.otpSent = true;
    }).catch((err) => {
      alert('error while loging in');
      alert(err);
      console.log(err);
    });
  }

  signIn() {
    this.confirmationResult.confirm(this.otp).then(user => {
      console.log(user)
    }).catch((err) => {
      alert('after singing in error');
      alert(err);
    });

  }
}


interface DonorRegistrationDetails {
  Name: string,
  PhoneNo: string,
  State: any,
  City: string,
  BloodGroup: string,
  BloodDonationDetails: BloodDonationDetails
}

interface BloodDonationDetails{
  NeverDonated: boolean,
  LastDonatedOn: boolean,
  LastDonatedDate: string,
  DontDonate:boolean
}
