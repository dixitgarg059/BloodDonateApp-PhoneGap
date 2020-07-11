import { Injectable } from '@angular/core';
import { LocationsService } from './locations.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class DonorRegistrationService extends LocationsService {
  user: Observable<firebase.User>;
  
  constructor(private angularFireStore: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    super();
    this.user = firebaseAuth.authState;
  }

  SignUp(phoneNo: string, recaptchaVerifier: any){
    this.firebaseAuth.signInWithPhoneNumber(phoneNo, recaptchaVerifier).then(
      (confirmationResult)=>{
        alert('succes');
        alert(confirmationResult);
      },
      (error)=>{
        alert('error');
        alert(error);
      }
    )
  }
}
