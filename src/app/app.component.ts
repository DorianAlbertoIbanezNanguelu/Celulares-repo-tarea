import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from "./shared/user";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
  ) {
    this.sideMenu();
    this.initializeApp();
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  navigate : any;
  
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "Generar Cliente",
        url   : "/generar-cliente",
        icon  : "person-circle-outline"
      },
      {
        title : "Tablas",
        url   : "/tables",
        icon  : "list-circle-outline"
      },
    ]
  }

  
}
