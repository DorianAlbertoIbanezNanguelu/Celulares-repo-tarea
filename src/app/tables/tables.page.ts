import { Component, OnInit } from '@angular/core';
import { Cliente,Tecnico,Celular } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';
import { Router } from "@angular/router";
import { User } from "../shared/user";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {
  Bookings1 = [];
  Bookings2 = [];
  Bookings3 = [];
  nombreSeleccionado = String;

  ClienteNombres=[];

  user : User;
  
  constructor(
    private aptService: AppointmentService,
    public router: Router,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    private db: AngularFireDatabase
    ) { 
    this.getUserLoggedIn();
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  

  ngOnInit() {
    this.fetchBookingsCliente();
    this.fetchBookingsTecnico();
    this.fetchBookingsCelular();

    let bookingRes1 = this.aptService.getBookingListCliente();
    let bookingRes2 = this.aptService.getBookingListTecnico();
    let bookingRes3 = this.aptService.getBookingListCelular();

    bookingRes1.snapshotChanges().subscribe(res => {
      this.Bookings1 = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings1.push(a as Cliente);
      })
    })

    bookingRes2.snapshotChanges().subscribe(res => {
      this.Bookings2 = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings2.push(a as Tecnico);
      })
    })

    bookingRes3.snapshotChanges().subscribe(res => {
      this.Bookings3 = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings3.push(a as Celular);
      })
    })

  }

  getUserLoggedIn() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  fetchBookingsCliente() {
    this.aptService.getBookingListCliente().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  fetchBookingsTecnico() {
    this.aptService.getBookingListTecnico().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  fetchBookingsCelular() {
    this.aptService.getBookingListCelular().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBookingCliente(id) {
    console.log(id)
    if (window.confirm('Seguro que deseas eliminar este cliente?')) {
      this.aptService.deleteBookingCliente(id)
    }
  }

  deleteBookingTecnico(id) {
    console.log(id)
    if (window.confirm('Seguro que deseas eliminar este Tecnico?')) {
      this.aptService.deleteBookingTecnico(id)
    }
  }

  deleteBookingCelular(id) {
    console.log(id)
    if (window.confirm('Seguro que deseas eliminar este celular?')) {
      this.aptService.deleteBookingCelular(id)
    }
  }


  gotoDashboard(){
    this.router.navigate(['dashboard']);
  }

  gotoGenerateClient(){
    this.router.navigate(['generar-cliente']);
  }

  gotoGenerateTecnico(){
    this.router.navigate(['generar-tecnico']);
  }

  gotoGenerateCelular(){
    this.router.navigate(['generar-celular']);
  }

  selectedName(any){
    this.nombreSeleccionado=any;

  }

  mostrarNombres(){
    console.log(this.nombreSeleccionado);
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
        title : "Tablas",
        url   : "/tables",
        icon  : "list-circle-outline"
      },

    ]
  }

}
