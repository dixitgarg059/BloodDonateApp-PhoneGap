import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state';
import { CitiesList, City } from 'src/app/models/city';
import { Observable } from 'rxjs';
import { DonorRegistrationService } from '../../service/donor-registration.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseUiAuthService } from 'src/app/service/firebase-ui-auth.service';
import { DonateBlood } from 'src/app/models/donate-blood-model';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.page.html',
  styleUrls: ['./donor-registration.page.scss'],
})

export class DonorRegistrationPage implements OnInit {

  public user: Observable<firebase.User>;
  public donorLoginForm: FormGroup;
  public statesList: State[];
  public citiesList: City[];
  private counter: number = 0;
  public obserVableReceivedData: boolean = false;

  public lastDonatedDefaultDate: any = new Date().toISOString().substring(0, 10);

  public donorRegistrationDetails: DonateBlood = {
    Id: '',
    DonorName: '',
    ContactNo: '+911234567890',
    State: 0,
    City: 0,
    BloodGroup: '',
    Email: '',
    LastDonatedDate: '',
    BloodDonationOption: ''
  };

  // userPhoneNo: string = '';
  // otpSent: Boolean = false;
  // otp: string = '123456';

  constructor(public donorRegistrationService: DonorRegistrationService, public angularFireAuth: AngularFireAuth, public formBuilder: FormBuilder, public firebaseUiAuthService: FirebaseUiAuthService) {
    this.user = angularFireAuth.authState;
    angularFireAuth.onAuthStateChanged((user) => {
      this.DonorLoggedIn(user);
    }, (error) => {
      alert(error);
    });
    this.firebaseUiAuthService.ui.start('#firebaseui-auth-container', this.firebaseUiAuthService.getUiConfig());
  }

  DonorLoggedIn(user: any) {
    let donorDetails: DonateBlood = { Id: '', BloodDonationOption: '', DonorName: '', BloodGroup: '', State: 0, City: 0, ContactNo: '', LastDonatedDate: '', Email: '' };

    this.donorRegistrationService.myDetails(user.phoneNumber).subscribe(x => {
      x.docs.forEach(function (doc) {
        let data = doc.data();
        console.log('doc data', data);
        donorDetails.DonorName = data.DonorName.trim();
        donorDetails.State = data.State;
        donorDetails.City = data.City;
        donorDetails.ContactNo = data.ContactNo.trim();
        donorDetails.Email = data.Email.trim();
        donorDetails.BloodGroup = data.BloodGroup.trim();
        donorDetails.LastDonatedDate = data.LastDonatedDate;
        donorDetails.BloodDonationOption = data.BloodDonationOption;
        donorDetails.Id = '123';
      });
    }, error => {
      console.log(error);
    }, () => {
      this.donorRegistrationDetails = donorDetails;
      this.obserVableReceivedData = true;
      this.donorLoginForm.get('name').patchValue(this.donorRegistrationDetails.DonorName);
      this.donorLoginForm.get('phone').patchValue(this.donorRegistrationDetails.ContactNo);
      this.donorLoginForm.get('state').patchValue(this.donorRegistrationService.getStates().filter(x => x.id == this.donorRegistrationDetails.State)[0].id);
      this.getCities();
      this.donorLoginForm.get('city').patchValue(this.donorRegistrationDetails.City);
      this.donorLoginForm.get('bloodgroup').patchValue(this.donorRegistrationDetails.BloodGroup);
      this.donorLoginForm.get('bloodDonationOption').patchValue(this.donorRegistrationDetails.BloodDonationOption);
      this.donorLoginForm.get('lastDonatedDate').patchValue(this.donorRegistrationDetails.LastDonatedDate);
    });
  }

  ngOnInit() {
    this.statesList = this.donorRegistrationService.getStates();
  }

  ionViewDidEnter() {
    //alert('loading');
    this.donorLoginForm = this.formBuilder.group({
      name: new FormControl(this.donorRegistrationDetails.DonorName, Validators.compose([Validators.maxLength(30), Validators.required])),
      phone: new FormControl(this.donorRegistrationDetails.ContactNo, Validators.compose([Validators.maxLength(13), Validators.minLength(10), Validators.required])),
      state: new FormControl(this.donorRegistrationDetails.State, Validators.compose([Validators.required])),
      city: new FormControl(this.donorRegistrationDetails.City, Validators.compose([Validators.required])),
      bloodgroup: new FormControl(this.donorRegistrationDetails.BloodGroup, Validators.compose([Validators.required])),
      bloodDonationOption: new FormControl(this.donorRegistrationDetails.BloodDonationOption, Validators.compose([Validators.required])),
      lastDonatedDate: new FormControl(this.donorRegistrationDetails.LastDonatedDate, Validators.compose([Validators.required]))
    });
    console.log('ng on it completed');
  }

  getCities() {
    //if (e) e.preventDefault();
    this.counter = 0;
    let cities: City[] = [];
    console.log('states', this.donorRegistrationDetails.State);
    CitiesList[this.donorRegistrationDetails.State].split('|').forEach(cityName => {
      cities.push({ id: this.counter, name: cityName.trim() });
      this.counter = this.counter + 1;
    });
    this.citiesList = cities;
  }

  segmentChanged($event: any) {
    this.donorRegistrationDetails.BloodDonationOption = $event.detail.value;
  }

  SetLastDonatedDate(e) {
    this.donorRegistrationDetails.BloodDonationOption = new Date(e.target.value).toISOString().substring(0, 10);
    this.donorLoginForm.get('lastDonatedDate').setValue(this.donorRegistrationDetails.BloodDonationOption, {
      onlyself: true
    });
  }


  SaveDonorDetails(e: any) {
    e.preventDefault();
    //this.isFormSubmitted = true;
    let me = this;
    //console.log(this.donorLoginForm.value);
    //console.log(this.donorRegistrationDetails.BloodDonationDetails.lastDonatedDate);
    if (me.donorLoginForm.valid) {
      console.log('valided coreclty form');
      console.log(this.donorRegistrationDetails);
    } else {
      //alert('empty fields');
      console.log('invalid form');
      console.log(this.donorRegistrationDetails);
    }
    //console.log(this.donorRegistrationDetails);
  }
}


