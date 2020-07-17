import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state';
import { CitiesList, City } from 'src/app/models/city';
import { Observable } from 'rxjs';
import { DonorRegistrationService } from '../../service/donor-registration.service';
import * as firebase from 'firebase';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { NgCalendarModule } from 'ionic2-calendar';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.page.html',
  styleUrls: ['./donor-registration.page.scss'],
})

export class DonorRegistrationPage implements OnInit {

  public donorLoginForm: FormGroup;
  public statesList: State[];
  public citiesList: City[];
  private counter: number = 0;
  public isFormSubmitted: boolean = false;

  public donorRegistrationDetails: DonorRegistrationDetails = {
    Name: '',
    PhoneNo: '',
    State: 1,
    City: '',
    BloodGroup: '',
    BloodDonationDetails: { option: 'NeverDonated', lastDonatedDate: '' }
  };

  //userPhoneNo: string = '';
  //otpSent: Boolean = false;
  //otp: string = '';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  user: Observable<firebase.User>;
  confirmationResult: firebase.auth.ConfirmationResult;
  lastDonatedDefaultDate: any = new Date().toISOString().substring(0, 10);
  constructor(public donorRegistrationService: DonorRegistrationService, public angularFireAuth: AngularFireAuth, public formBuilder: FormBuilder) {
    this.user = angularFireAuth.authState;
    //this.otpSent = false;
    //this.otp = '';

    this.donorLoginForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.required])),
      phone: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]+$'), Validators.required])),
      state: new FormControl('', Validators.compose([Validators.required])),
      city: new FormControl('', Validators.compose([Validators.required])),
      bloodgroup: new FormControl('', Validators.compose([Validators.required])),
      lastDonatedDate: new FormControl(this.lastDonatedDefaultDate, Validators.compose([Validators.required]))
      //dob: new FormControl('', Validators.compose([ Validators.maxLength(30), Validators.required ])),
    });

  }

  ngOnInit() {
    this.statesList = this.donorRegistrationService.getStates();
    //this.donorRegistrationDetails.BloodDonationDetails.lastDonatedDate = 'Fri Jul 10 2020 00:00:00 GMT+0300 (Arabian Standard Time)';
    //this.donorRegistrationDetails.BloodDonationDetails.option = 'LastDonatedOn';
  }

  ionViewDidEnter() {

    // this.calendar.createCalendar('MyCalendar').then(
    //   (msg) => { console.log(msg); },
    //   (err) => { console.log(err); }
    // );
    //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
  }

  getCities(e) {
    if (e) e.preventDefault();
    this.counter = 0;
    let cities: City[] = [];
    console.log('states', this.donorRegistrationDetails.State);
    CitiesList[this.donorRegistrationDetails.State].split('|').forEach(cityName => {
      cities.push({ id: this.counter, name: cityName.trim() });
      this.counter = this.counter + 1;
    });
    this.citiesList = cities;
  }

  userSignUp() {
    //this.angularFireAuth.create
  }

  sendOtp() {
    //this.angularFireAuth.user
    /*this.angularFireAuth.signInWithPhoneNumber(this.userPhoneNo, this.recaptchaVerifier).then((confirmationResult) => {
      this.confirmationResult = confirmationResult;
      this.otpSent = true;
    }).catch((err) => {
      alert('error while loging in');
      alert(err);
      console.log(err);
    });*/
  }

  signIn() {
    /*
    this.confirmationResult.confirm(this.otp).then(user => {
      console.log(user)
    }).catch((err) => {
      alert('after singing in error');
      alert(err);
    });
    */
  }

  segmentChanged($event: any) {
    this.donorRegistrationDetails.BloodDonationDetails.option = $event.detail.value;
  }

  SetLastDonatedDate(e) {
    this.donorRegistrationDetails.BloodDonationDetails.lastDonatedDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.donorLoginForm.get('lastDonatedDate').setValue(this.donorRegistrationDetails.BloodDonationDetails.lastDonatedDate, {
      onlyself: true
    });
  }


  SaveDonorDetails(e: any) {
    e.preventDefault();
    this.isFormSubmitted = true;
    let me = this;
    //console.log(this.donorLoginForm.value);
    //console.log(this.donorRegistrationDetails.BloodDonationDetails.lastDonatedDate);
    if (me.donorLoginForm.valid) {
      console.log('valided coreclty form');
    } else {
      //alert('empty fields');
      console.log('invalid form');
    }
    //console.log(this.donorRegistrationDetails);
  }
}


interface DonorRegistrationDetails {
  Name: string,
  PhoneNo: string,
  State: number,
  City: string,
  BloodGroup: string,
  BloodDonationDetails: BloodDonationDetails
}

// interface BloodDonationDetails {
//   NeverDonated: boolean,
//   LastDonatedOn: boolean,
//   LastDonatedDate: string,
//   DontDonate: boolean
// }

interface BloodDonationDetails {
  option: string,
  lastDonatedDate: string
}
