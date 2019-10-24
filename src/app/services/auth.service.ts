import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = firebaseAuth.authState;
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

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() != null;
  }
}
