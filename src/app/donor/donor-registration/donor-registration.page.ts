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
    //BloodDonationDetails: { NeverDonated: true, DontDonate: false, LastDonatedOn: false, LastDonatedDate: '' }
    BloodDonationDetails: [{ checked: false, name: 'NeverDonated' }, { name: 'LastDonatedOn', checked: false }, { name: 'DontDonate', checked: true }]
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

  changeBloodDonationDetails(index:any) {
    //console.log(event.target.value);
    console.log(index);
    //this.donorRegistrationDetails.BloodDonationDetails.NeverDonated = false;
    //this.donorRegistrationDetails.BloodDonationDetails.LastDonatedOn = false;
    //this.donorRegistrationDetails.BloodDonationDetails.DontDonate = false;

    // if(event.target.value == 'NeverDonated') {
    //   this.donorRegistrationDetails.BloodDonationDetails.NeverDonated = true;
    //   this.donorRegistrationDetails.BloodDonationDetails.LastDonatedOn = false;
    //   this.donorRegistrationDetails.BloodDonationDetails.DontDonate = false;
    // }
    // if(event.target.value == 'LastDonatedOn') {
    //   this.donorRegistrationDetails.BloodDonationDetails.NeverDonated = false;
    //   this.donorRegistrationDetails.BloodDonationDetails.LastDonatedOn = true;
    //   this.donorRegistrationDetails.BloodDonationDetails.DontDonate = false;
    // }
    // if(event.target.value == 'DontDonate') {
    //   this.donorRegistrationDetails.BloodDonationDetails.NeverDonated = false;
    //   this.donorRegistrationDetails.BloodDonationDetails.LastDonatedOn = false;
    //   this.donorRegistrationDetails.BloodDonationDetails.DontDonate = true;
    // }

    this.donorRegistrationDetails.BloodDonationDetails.forEach((value, counter) => {
     // console.log(counter);
      if (index === value) 
          value.checked = false;
          //alert('matched');
    });

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
  //BloodDonationDetails: BloodDonationDetails,
  BloodDonationDetails: BloodDonationDetails[]
}

// interface BloodDonationDetails {
//   NeverDonated: boolean,
//   LastDonatedOn: boolean,
//   LastDonatedDate: string,
//   DontDonate: boolean
// }

interface BloodDonationDetails {
  name: string,
  checked: boolean
}
