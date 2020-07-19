import { Injectable } from '@angular/core';
import { LocationsService } from './locations.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference, QuerySnapshot } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable, of, Subscribable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DonateBlood } from '../models/donate-blood-model';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DonorRegistrationService extends LocationsService {
  user: Observable<firebase.User>;
  private donorCollection: AngularFirestoreCollection<DonateBlood>;
  constructor(private angularFireStore: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    super();
    this.user = firebaseAuth.authState;
  }

  GetMyDetails(phoneNo: string): Observable<firestore.QuerySnapshot<firestore.DocumentData>> {
    let dot: DonateBlood = { Id: '', BloodDonationOption: '', DonorName: '', BloodGroup: '', State: 0, City: 0, ContactNo: '', LastDonatedDate: '', Email: '' };
    // this.angularFireStore.collection<DonateBlood>('Donors', ref => ref.where('ContactNo', '==', phoneNo)).get().subscribe((x) => {
    //   x.docs.forEach(function (doc) {
    //     let data = doc.data();
    //     console.log('doc data', data);
    //     dot.DonorName = data.DonorName.trim();
    //     dot.State = data.State.trim();
    //     dot.City = data.City.trim();
    //     dot.ContactNo = data.ContactNo.trim();
    //     dot.Email = data.Email.trim();
    //     dot.BloodGroup = data.BloodGroup.trim();
    //     dot.LastDonatedDate = data.LastDonatedDate;
    //     dot.BloodDonationOption = data.BloodDonationOption;
    //     dot.Id ='123';
    //   });
    // }, (error) => {
    //   console.log('error while getting data', error);
    // });

    return this.angularFireStore.collection<DonateBlood>('Donors', ref => ref.where('ContactNo', '==', phoneNo)).get();
    //console.log('data before returning', dot);
    //return dot;
  }

  SaveMyDetails(donorObj: DonateBlood) {
    let returnValue:any;
    if (donorObj.Id != null || donorObj.Id != undefined) {
      returnValue = this.angularFireStore.collection<DonateBlood>('Donors').doc(donorObj.Id).update(donorObj).then(()=>{
        return 'success';
      }, err=>{
        return err;
      });
    }
    else {
      returnValue = this.angularFireStore.collection<DonateBlood>('Donors').add(donorObj).then(()=>{
        return 'success'
      }, err=>{
        return err;
      });
    }
  }
}

