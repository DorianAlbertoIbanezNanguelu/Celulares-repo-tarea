import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFireAuth } from "@angular/fire/auth";

import { User } from "../shared/user";


import { Router } from "@angular/router";

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
 
  user : User;

  constructor(
    public authService: AuthenticationService, 
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar

  ) {
    this.getUserLoggedIn();  
    this.sideMenu();
    this.initializeApp();

    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    
    getUserLoggedIn() {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  



  ngOnInit() 
  {
    
  }
  
  gotoTables(){
    this.router.navigate(['tables']); 
  }
  navigate:any;
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
        title : "Tablas",
        url   : "/tables",
        icon  : "list-circle-outline"
      },
      {
        title : "Generar Cliente",
        url   : "/generar-cliente",
        icon  : "person-circle-outline"
      },
      {
        title : "Generar Tecnico",
        url   : "/generar-tecnico",
        icon  : "person-circle-outline"
      },
      {
        title : "Generar Equipo Electrónico",
        url   : "/generar-celular",
        icon  : "person-circle-outline"
      },
      

    ]
  }

}