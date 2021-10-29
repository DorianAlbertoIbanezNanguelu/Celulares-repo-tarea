import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-generar-tecnico',
  templateUrl: './generar-tecnico.page.html',
  styleUrls: ['./generar-tecnico.page.scss'],
})
export class GenerarTecnicoPage implements OnInit {
  bookingForm: FormGroup;

  constructor
  (
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      nombre: [''],
      correo: [''],
      celular: [''],
      direccion: [''],
      observaciones: [''],
      fecha_reg: new Date().toISOString(),
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      console.log(this.bookingForm.value);
      this.aptService.createBookingTecnico(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/tables']);
      })
        .catch(error => console.log(error));
    }
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
        title : "Tablas",
        url   : "/tables",
        icon  : "list-circle-outline"
      },

    ]
  }

}
