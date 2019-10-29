import { Injectable, ɵCompiler_compileModuleSync__POST_R3__, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  userDetails: firebase.User;
  displayName: string;
  ErrorMessage: string;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = firebaseAuth.authState;
    this.user$.subscribe(
      (user) => {this.userDetails = user;
      this.displayName = this.userDetails ? this.userDetails.displayName : '';}
    )
  }

  Login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, firestore auth worked!');
      })
      .catch(err => {
        console.log('firestore auth didn\'t work:', err.message);
      });
  }


  // /* Sign up */
  // SignUp(email: string, password: string) {
  //   this.firebaseAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(res => {
  //       console.log('Successfully signed up!', res);
  //     })
  //     .catch(error => {
  //       console.log('Something is wrong:', error.message);
  //       this.ErrorMessage = error.errorMessage;
  //     });    
  // }

  SignUp(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
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
