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
  // public AvailableDonors: Observable<SearchDonor[]>;
  public AvailableDonors: SearchDonor[];
  public selectedSearchOptions: SelectedSearchOptions = {
    BloodGroup: '',
    City: '',
    PageLoaded: true,
    State: '',
    SearchBtnClicked: false,
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

  }

  ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
  }


  userSignUp(){
    //this.angularFireAuth.create
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


interface SelectedSearchOptions {
  BloodGroup: string,
  City: string,
  PageLoaded: boolean,
  State: any,
  SearchBtnClicked: boolean,
}
