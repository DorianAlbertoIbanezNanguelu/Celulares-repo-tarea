import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.page.html',
  styleUrls: ['./editar-cliente.page.scss'],
})
export class EditarClientePage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;

  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBookingCliente(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      nombre: [''],
      correo: [''],
      celular: [''],
      direccion: [''],
      observaciones: [''],
      fecha_reg: new Date().toISOString(),
    })
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.aptService.updateBookingCliente(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/tables']);
      })
      .catch(error => console.log(error));
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
