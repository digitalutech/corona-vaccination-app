import { Injectable } from '@angular/core';
import { Appointment } from './appointment/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  private appointments: Appointment[] = [];

  constructor() {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      this.appointments = JSON.parse(storedAppointments);
    }
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    this.saveAppointments();
  }

  updateAppointment(index: number, updatedAppointment: Appointment) {
    this.appointments[index] = updatedAppointment;
    this.saveAppointments();
  }

  getAppointments() {
    return this.appointments;
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    this.saveAppointments();
  }

  private saveAppointments() {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
