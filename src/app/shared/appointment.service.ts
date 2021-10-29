import { Injectable } from '@angular/core';
import { Celular,Cliente,Tecnico } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRefCliente: AngularFireList<any>;
  bookingRefCliente: AngularFireObject<any>;

  bookingListRefTecnico: AngularFireList<any>;
  bookingRefTecnico: AngularFireObject<any>;

  bookingListRefCelular: AngularFireList<any>;
  bookingRefCelular: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Crear Cliente
  createBookingCliente(apt: Cliente) {
    console.log(apt);
    this.bookingListRefCliente = this.db.list('/appointment/Cliente');
    return this.bookingListRefCliente.push({
      nombre: apt.nombre,
      correo: apt.correo,
      celular: apt.celular,
      direccion: apt.direccion,
      observaciones: apt.observaciones,
      fecha_reg: apt.fecha_reg,
    })
  }

  // Crear Tecnico
  createBookingTecnico(apt: Tecnico) {
    console.log(apt);
    this.bookingListRefTecnico = this.db.list('/appointment/Tecnico');
    return this.bookingListRefTecnico.push({
      nombre: apt.nombre,
      correo: apt.correo,
      celular: apt.celular,
      direccion: apt.direccion,
      observaciones: apt.observaciones,
      fecha_reg: apt.fecha_reg,
      
    })
  }

  // Crear Tecnico
  createBookingCelular(apt: Celular) {
    console.log(apt);
    this.bookingListRefTecnico = this.db.list('/appointment/Celular');
    return this.bookingListRefTecnico.push({
      equipo: apt.equipo,
      modelo: apt.modelo,
      marca: apt.marca,
      imei: apt.imei,
      falla: apt.falla,
      observaciones: apt.observaciones,
      id_cliente: apt.id_cliente,
      id_tecnico: apt.id_tecnico,
      estatus: apt.estatus,
      reparacion: apt.reparacion,
      notas: apt.notas,
      fecha_reg: apt.fecha_reg,
      fecha_sal: apt.fecha_sal
      
    })
  }

  // Obtener Cliente por ID
  getBookingCliente(id: string) {
    this.bookingRefCliente = this.db.object('/appointment/Cliente' + id);
    return this.bookingRefCliente;
  }

  // Obtener Tecnico por ID
  getBookingTecnico(id: string) {
    this.bookingRefTecnico = this.db.object('/appointment/Tecnico' + id);
    return this.bookingRefTecnico;
  }

  // Obtener celular por ID
  getBookingCelular(id: string) {
    this.bookingRefCelular = this.db.object('/appointment/Celular' + id);
    return this.bookingRefCelular;
  }

  // Obtener Lista Clientes
  getBookingListCliente() {
    this.bookingListRefCliente = this.db.list('/appointment/Cliente');
    return this.bookingListRefCliente;
  }

  // Obtener Lista Tecnico
  getBookingListTecnico() {
    this.bookingListRefTecnico = this.db.list('/appointment/Tecnico');
    return this.bookingListRefTecnico;
  }

  // Obtener Lista Celular
  getBookingListCelular() {
    this.bookingListRefCelular = this.db.list('/appointment/Celular');
    return this.bookingListRefCelular;
  }

  // Actualizar Cliente
  updateBookingCliente(id, apt: Cliente) {
    return this.bookingRefCliente.update({
      name: apt.nombre,
      email: apt.correo,
      celular: apt.celular,
      direccion: apt.direccion,
      observaciones: apt.observaciones,
      fecha_reg: apt.fecha_reg,
    })
  }

  // Actualizar Tecnico
  updateBookingTecnico(id, apt: Tecnico) {
    return this.bookingRefTecnico.update({
      name: apt.nombre,
      email: apt.correo,
      celular: apt.celular,
      direccion: apt.direccion,
      observaciones: apt.observaciones,
      fecha_reg: apt.fecha_reg,
    })
  }

  // Actualizar Tecnico
  updateBookingCelular(id, apt: Celular) {
    return this.bookingRefCelular.update({
      equipo: apt.equipo,
      modelo: apt.modelo,
      marca: apt.marca,
      imei: apt.imei,
      falla: apt.falla,
      observaciones: apt.observaciones,
      id_cliente: apt.id_cliente,
      id_tecnico: apt.id_tecnico,
      estatus: apt.estatus,
      reparacion: apt.reparacion,
      notas: apt.notas,
      fecha_reg: apt.fecha_reg,
      fecha_sal: apt.fecha_sal
    })
  }

  // Eliminar Cliente
  deleteBookingCliente(id: string) {
    this.bookingRefCliente = this.db.object('/appointment/Cliente' + id);
    this.bookingRefCliente.remove();
  }

  // Eliminar Cliente
  deleteBookingTecnico(id: string) {
    this.bookingRefTecnico = this.db.object('/appointment/Tecnico' + id);
    this.bookingRefTecnico.remove();
  }

  // Eliminar Celular
  deleteBookingCelular(id: string) {
    this.bookingRefCelular = this.db.object('/appointment/Celular' + id);
    this.bookingRefCelular.remove();
  }


}