import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // use a pseudo trigger function for UI testing then make it behave
  isLoggedIn(logged) {
    return logged;
  }

}
