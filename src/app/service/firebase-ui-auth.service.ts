import { Injectable } from '@angular/core';
// import firebase from 'firebase/app';
import * as firebase from 'firebase';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUiAuthService {

  ui: firebaseui.auth.AuthUI;

  constructor() { 
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  }

  public getUiConfig() {
    // FirebaseUI config.
    return {
      callbacks: {
        signInSuccessWithAuthResult: (authResult: firebase.auth.UserCredential) => {
          const user = authResult.user;
          const isNewUser = authResult.additionalUserInfo.isNewUser;

          // initialize new user
          if (isNewUser) {
            // do initialization stuff here (ex. create profile)
            return false;
          }

          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
              size: 'invisible'
          }
      }
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: '<your-pp-url>'
    };
  }

}
