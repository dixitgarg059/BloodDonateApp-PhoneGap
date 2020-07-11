import { Injectable } from '@angular/core';
import { SearchDonor } from '../models/search-donor-model';
import { LocationsService } from './locations.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDonorService extends LocationsService {
  //private donorsList: Observable<SearchDonor[]>;
  private donorCollection: AngularFirestoreCollection<SearchDonor>;
  constructor(private angularFireStore: AngularFirestore) {
    super();
  }

  async searchDonors(state, city, bloodGroup): Promise<SearchDonor[]> {
    let myDonorList: SearchDonor[] = [];
    this.donorCollection = this.angularFireStore.collection<SearchDonor>('Donors');
    // alert(state);
    // alert(city);
    // alert(bloodGroup);
    const snapshot = await this.donorCollection.ref.where('State', '==', state).where('City', '==', city).where('BloodGroup', '==', bloodGroup).get();
    if (snapshot.empty) {
      return myDonorList;
    }

    snapshot.forEach(doc => {
      const data = doc.data();
      let donorDe: SearchDonor = {
        DonorName: data.DonorName,
        LastDonatedDate: data.LastDonatedDate,
        BloodGroup: data.BloodGroup,
        Id: '123',
        City: data.City,
        State: data.State,
        ContactNo: data.ContactNo,
        Email: data.Email
      }
      myDonorList.push(donorDe);
    });
    return myDonorList;
  }
}

//return this.donorsList;
/* this.donorCollection = this.angularFireStore.collection<SearchDonor>('Donors');
this.donorsList = this.donorCollection.snapshotChanges().pipe(
map(donor => {
return donor.map(a => {
const data = a.payload.doc.data();
let donorDe: SearchDonor = {
DonorName: data.DonorName,
LastDonatedDate: data.LastDonatedDate,
BloodGroup: data.BloodGroup,
Id: a.payload.doc.id,
City: data.City,
State: data.State,
ContactNo: data.ContactNo,
Email: data.Email
}
return donorDe;
});
})
);
return this.donorsList; 
https://devdactic.com/ionic-4-firebase-angularfire-2/
*/


