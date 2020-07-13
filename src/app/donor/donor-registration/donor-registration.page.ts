import { Component, OnInit } from '@angular/core';
import { SearchDonor } from 'src/app/models/search-donor-model';
import { State } from '../../models/state';
import { CitiesList, City } from 'src/app/models/city';
import { Observable } from 'rxjs';
import { DonorRegistrationService } from '../../service/donor-registration.service';
import * as firebase from 'firebase';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui';

import { DatePickerModule } from 'ionic4-date-picker';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.page.html',
  styleUrls: ['./donor-registration.page.scss'],
})
export class DonorRegistrationPage implements OnInit {

  public statesList: State[];
  public citiesList: City[];
  private counter: number = 0;
  public myDate:string;
  public myTime:string;
  public myDateNTime:string;

  public donorRegistrationDetails: DonorRegistrationDetails = {
    Name: '',
    PhoneNo: '9963599059',
    State: '',
    City: '',
    BloodGroup: '',
    //BloodDonationDetails: { NeverDonated: true, DontDonate: false, LastDonatedOn: false, LastDonatedDate: '' }
    BloodDonationDetails: [{ name: 'NeverDonated', checked: false },
    { name: 'LastDonatedOn', checked: false },
    { name: 'DontDonate', checked: true }]
  };

  userPhoneNo: string = '';
  otpSent: Boolean = false;
  otp: string = '';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  user: Observable<firebase.User>;
  confirmationResult: firebase.auth.ConfirmationResult;

  constructor(public donorRegistrationService: DonorRegistrationService, public angularFireAuth: AngularFireAuth, public datePickerModule: DatePickerModule, private datePicker: DatePicker) {
    this.user = angularFireAuth.authState;
    this.otpSent = false;
    this.otp = '';

  }


  ngOnInit() {
    this.statesList = this.donorRegistrationService.getStates();
    this.donorRegistrationDetails.BloodDonationDetails = [{ name: 'NeverDonated', checked: true },
    { name: 'LastDonatedOn', checked: false },
    { name: 'DontDonate', checked: true }];

   

    
  }

  ionViewDidEnter() {
    // this.calendar.createCalendar('MyCalendar').then(
    //   (msg) => { console.log(msg); },
    //   (err) => { console.log(err); }
    // );
    //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText:"Save Date",
      todayText:"Set Today"
    }).then(
      date => {
        this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
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

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  changeBloodDonationDetails(name: any, checked: any, value: any) {
    //alert(';qw');
    this.donorRegistrationDetails.BloodDonationDetails[0].checked = false;
    this.donorRegistrationDetails.BloodDonationDetails[1].checked = false;
    this.donorRegistrationDetails.BloodDonationDetails[2].checked = false;
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

  showDatepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText:"Save Date",
      todayText:"Set Today"
    }).then(
      date => {
        this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }  


  showTimepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      okText:"Save Time",
      nowText:"Set Now"
    }).then(
      time => {
        this.myTime =  time.getHours()+":"+time.getMinutes();
      },
      err => console.log('Error occurred while getting time: ', err)
    );
  }  


  showDateTimepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL,
      doneButtonLabel:"Save Date & Time",
      is24Hour:false
    }).then(
      dateTime => {
        this.myDateNTime = dateTime.getDate()+"/"+dateTime.toLocaleString('default', { month: 'long' })+"/"+dateTime.getFullYear()+" "+dateTime.getHours()+":"+dateTime.getMinutes();
      },
      err => console.log('Error occurred while getting dateTime: ', err)
    );
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
