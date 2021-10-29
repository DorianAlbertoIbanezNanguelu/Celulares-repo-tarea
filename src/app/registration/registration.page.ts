import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../shared/user";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public ngFireAuth: AngularFireAuth,
  ) { }

  ngOnInit(){}

  signUp(email, displayName, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      // Do something here
      res.user.updateProfile({
        displayName: displayName.value,
      }).then(() => { }); 
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}
irAlInicioSesion(){
  this.router.navigate(['login']);
}
  

}