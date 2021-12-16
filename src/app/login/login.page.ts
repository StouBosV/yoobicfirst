import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

import { Credential } from './credential.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: Credential[];
  email: string;
  password: string;
  inputArray: Credential[];

  constructor(private loginService: LoginService, public navCtrl: NavController) { }

  ngOnInit() {
  }

  onClickAuthentication(loginEmail: string, loginPassword: string) {
    //retrieve the data from the service
    this.credentials = this.loginService.authenticate();
    //stores the data from the ion-inputs
    this.inputArray = [{email: loginEmail, password: loginPassword}];
    //check if the data of those 2 arrays match! and then redirects to Missions View
    if(this.inputArray[0].email === this.credentials[0].email && this.inputArray[0].password === this.credentials[0].password) {
      this.navCtrl.navigateRoot('/menu');
    }else {
      document.querySelector('.wrong').classList.remove('ion-hide');
    }
  }
}
