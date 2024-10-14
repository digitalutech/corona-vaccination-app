import { Component } from '@angular/core';
import { VaccinationService } from '../vaccination.service';
import { Appointment } from '../appointment/appointment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  appointments: Appointment[] = [];

  constructor(private vaccinationService: VaccinationService, private router: Router) {
    this.appointments = this.vaccinationService.getAppointments();
  }

  deleteAppointment(index: number) {
    this.vaccinationService.deleteAppointment(index);
    this.appointments = this.vaccinationService.getAppointments(); // Refresh list
  }

  editAppointment(index: number) {
    const appointment = this.appointments[index];
    this.router.navigate(['/book'], { queryParams: { index } }); // Navigate to the booking page with the index
  }
}
