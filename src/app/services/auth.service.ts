import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';

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

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = firebaseAuth.authState;
    this.user$.subscribe(
      (user) => {this.userDetails = user;
      this.displayName = this.userDetails ? this.userDetails.displayName : '';}
    )
  }

  login(email: string, password: string) {
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

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }


  isLoggedIn(): boolean {
    return this.userDetails != null;
  }

  getDisplayName(): string {
    return this.userDetails ? this.userDetails.email : '';
  }
}
