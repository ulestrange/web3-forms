import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';


// don't know why this is nescessary but it works
import * as firebase from 'firebase/app';



import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: Observable<firebase.User>;
  private userDetails: firebase.User; 


  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = firebaseAuth.authState;
    this.user$.subscribe(
      (user) => {
      this.userDetails = user;
      }
    )
  }

  Login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, firestore auth worked!');
          resolve(value);
        })
        .catch(err => {
          console.log('firestore auth didn\'t work:', err.message);
          //note we have chosen not to pass too much information about failure here
          reject('login failed');
        });
    })
  }



  SignUp(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        })
        .catch( err => reject(err.message))
    })
  }

  Logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }


  IsLoggedIn(): boolean {
    return this.userDetails != null;
  }

  GetDisplayName(): string {
    return this.userDetails ? this.userDetails.email : '';
  }
}
