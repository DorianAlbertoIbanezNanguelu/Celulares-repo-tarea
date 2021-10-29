import { Component, OnInit } from '@angular/core';
import { Cliente,Tecnico,Celular } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';
import { User } from "../shared/user";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-generar-celular',
  templateUrl: './generar-celular.page.html',
  styleUrls: ['./generar-celular.page.scss'],
})
export class GenerarCelularPage implements OnInit {
  Bookings1 = [];
  Bookings2 = [];

  user : User;

  bookingForm: FormGroup;
  id: any;

  constructor(
    private aptService: AppointmentService,
    public router: Router,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    public fb: FormBuilder
    ) { 
    this.getUserLoggedIn();
    this.initializeApp();

  }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      equipo: [''],
      modelo: [''],
      marca: [''],
      imei: [''],
      falla: [''],
      id_cliente: [''],
      id_tecnico: [''],
      reparacion: [''],
      estatus:[''],
      observaciones: [''],
      notas: [''],
      fecha_reg: new Date().toISOString(),
      fecha_sal: [''],
      
    })
    
    this.fetchBookingsCliente();
    this.fetchBookingsTecnico();

    let bookingRes1 = this.aptService.getBookingListCliente();
    let bookingRes2 = this.aptService.getBookingListTecnico();


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

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      console.log(this.bookingForm.value);
      this.aptService.createBookingCelular(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/tables']);
      })
        .catch(error => console.log(error));
    }
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

}
