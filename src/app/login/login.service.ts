import { Injectable } from '@angular/core';

import {Credential} from './credential.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private credentials: Credential[] = [
    {
      email: 'user@test.com',
      password: '123456789'
    }
  ];

  constructor() { }

  authenticate() {
    console.log('login service returning credentials');
    return  [...this.credentials];
  }
}
