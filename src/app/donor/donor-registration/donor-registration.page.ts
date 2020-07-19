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
import { ToastController } from '@ionic/angular';

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
  public savingDetails: boolean = false;

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

  constructor(public donorRegistrationService: DonorRegistrationService, public angularFireAuth: AngularFireAuth, public formBuilder: FormBuilder, public firebaseUiAuthService: FirebaseUiAuthService, public toastController: ToastController) {
    this.user = angularFireAuth.authState;
    angularFireAuth.onAuthStateChanged((user) => {
      this.DonorLoggedIn(user.phoneNumber);
    }, (error) => {
      alert(error);
    });
    this.firebaseUiAuthService.ui.start('#firebaseui-auth-container', this.firebaseUiAuthService.getUiConfig());
  }

  DonorLoggedIn(phoneNumber: any) {
    let donorDetails: DonateBlood = { Id: '', BloodDonationOption: '', DonorName: '', BloodGroup: '', State: 0, City: 0, ContactNo: '', LastDonatedDate: '', Email: '' };
    this.savingDetails = true;
    this.donorRegistrationService.GetMyDetails(phoneNumber).subscribe(x => {
      x.docs.forEach(function (doc) {
        let data = doc.data();
        console.log('doc data', data);
        console.log('doc id:', doc.id);
        donorDetails.DonorName = data.DonorName.trim();
        donorDetails.State = data.State;
        donorDetails.City = data.City;
        donorDetails.ContactNo = phoneNumber;
        //donorDetails.ContactNo = data.ContactNo.trim();
        donorDetails.Email = data.Email.trim();
        donorDetails.BloodGroup = data.BloodGroup.trim();
        donorDetails.LastDonatedDate = data.LastDonatedDate;
        donorDetails.BloodDonationOption = data.BloodDonationOption;
        donorDetails.Id = doc.id;
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('ContactNo:', this.donorRegistrationDetails.ContactNo);
      this.donorRegistrationDetails = donorDetails;
      this.obserVableReceivedData = true;
      this.donorLoginForm.get('name').patchValue(this.donorRegistrationDetails.DonorName);
      this.donorLoginForm.get('phone').patchValue(phoneNumber);
      this.donorLoginForm.get('state').patchValue(this.donorRegistrationService.getStates().filter(x => x.id == this.donorRegistrationDetails.State)[0].id);
      this.getCities();
      this.donorLoginForm.get('city').patchValue(this.donorRegistrationDetails.City);
      this.donorLoginForm.get('bloodgroup').patchValue(this.donorRegistrationDetails.BloodGroup);

      if (this.donorRegistrationDetails.BloodDonationOption == '') {
        this.donorRegistrationDetails.BloodDonationOption = 'NeverDonated';
        this.donorLoginForm.get('bloodDonationOption').patchValue(this.donorRegistrationDetails.BloodDonationOption);
      }
      else {
        this.donorLoginForm.get('bloodDonationOption').patchValue(this.donorRegistrationDetails.BloodDonationOption);
      }

      if (this.donorRegistrationDetails.LastDonatedDate != '') {
        this.donorLoginForm.get('lastDonatedDate').patchValue(this.donorRegistrationDetails.LastDonatedDate);
      }
      else {
        this.donorRegistrationDetails.LastDonatedDate = this.lastDonatedDefaultDate;
        this.donorLoginForm.get('lastDonatedDate').patchValue(this.donorRegistrationDetails.LastDonatedDate);
      }

      this.savingDetails = false;

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
    console.log(this.donorLoginForm.get('state').value);
    CitiesList[this.donorLoginForm.get('state').value].split('|').forEach(cityName => {
      cities.push({ id: this.counter, name: cityName.trim() });
      this.counter = this.counter + 1;
    });
    this.citiesList = cities;
  }

  segmentChanged($event: any) {
    this.donorRegistrationDetails.BloodDonationOption = $event.detail.value;
  }

  SetLastDonatedDate(e) {
    this.donorRegistrationDetails.LastDonatedDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.donorLoginForm.get('lastDonatedDate').setValue(this.donorRegistrationDetails.LastDonatedDate, {
      onlyself: true
    });
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Your details have been saved.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentFailureToast() {
    const toast = await this.toastController.create({
      message: 'Unable to save details.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  SaveDonorDetails(e: any) {
    e.preventDefault();
    //this.isFormSubmitted = true;
    let me = this;
    //console.log(this.donorLoginForm.value);
    //console.log(this.donorRegistrationDetails.BloodDonationDetails.lastDonatedDate);
    if (me.donorLoginForm.valid) {
      this.savingDetails = true;
      console.log('my id:', this.donorRegistrationDetails.Id);
      this.donorRegistrationDetails.DonorName = this.donorLoginForm.get('name').value;
      this.donorRegistrationDetails.ContactNo = this.donorLoginForm.get('phone').value;
      this.donorRegistrationDetails.State = this.donorLoginForm.get('state').value;
      this.donorRegistrationDetails.City = this.donorLoginForm.get('city').value;
      this.donorRegistrationDetails.BloodGroup = this.donorLoginForm.get('bloodgroup').value;
      this.donorRegistrationDetails.BloodDonationOption = this.donorLoginForm.get('bloodDonationOption').value;
      this.donorRegistrationDetails.LastDonatedDate = this.donorLoginForm.get('lastDonatedDate').value;

      if (this.donorRegistrationDetails.Id != '') {
        console.log('upadte:', this.donorRegistrationDetails);
        this.donorRegistrationService.UpdateMyDetails(this.donorRegistrationDetails).then(() => {
          //alert('details updated');
        }).catch((err) => {
          this.presentFailureToast();
          console.log('err:', err);
        }).finally(() => {
          this.savingDetails = false;
          this.presentSuccessToast();
          this.DonorLoggedIn(this.donorRegistrationDetails.ContactNo);
        });
        return;
      }
      else {
        console.log('add details:', this.donorRegistrationDetails);
        this.donorRegistrationService.AddMyDetails(this.donorRegistrationDetails).then((x) => {
          //alert('details added');
        }).catch((err) => {
          this.presentFailureToast();
          console.log('err:', err);
        }).finally(() => {
          this.savingDetails = false;
          this.presentSuccessToast();
          console.log('user contact no:', this.donorRegistrationDetails.ContactNo);
          this.DonorLoggedIn(this.donorRegistrationDetails.ContactNo);
        });
        return;
      }

    } else {
      //invalid form, alert user
      //alert('empty fields');
      console.log('invalid form');
      this.donorLoginForm.markAsDirty();
      console.log(this.donorRegistrationDetails);
    }
  }
}


