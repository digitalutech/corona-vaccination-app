import { Component } from '@angular/core';
import { VaccinationService } from '../vaccination.service';
import { Appointment } from '../appointment/appointment.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  totalVaccinations = 0;
  maleVaccinations = 0;
  femaleVaccinations = 0;
  ageGroup1844 = 0;
  ageGroup45Plus = 0;

  constructor(private vaccinationService: VaccinationService) {
    this.calculateSummary();
  }

  calculateSummary() {
    const appointments = this.vaccinationService.getAppointments();
    this.totalVaccinations = appointments.length;

    appointments.forEach(appointment => {
      if (appointment.gender === 'male') {
        this.maleVaccinations++;
      } else if (appointment.gender === 'female') {
        this.femaleVaccinations++;
      }

      if (appointment.age >= 18 && appointment.age <= 44) {
        this.ageGroup1844++;
      } else if (appointment.age >= 45) {
        this.ageGroup45Plus++;
      }
    });
  }
}
