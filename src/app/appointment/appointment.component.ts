import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccinationService } from '../vaccination.service';
import { Appointment } from './appointment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  editingIndex: number | null = null;
  successMessage: string | null = null; // Success message variable

  constructor(private fb: FormBuilder, private vaccinationService: VaccinationService, private route: ActivatedRoute) {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      vaccine: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const index = params['index'];
      if (index !== undefined) {
        this.editingIndex = +index;
        const appointment = this.vaccinationService.getAppointments()[this.editingIndex];
        if (appointment) {
          this.appointmentForm.patchValue(appointment);
        }
      }
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      const appointment: Appointment = this.appointmentForm.value;
      if (this.editingIndex !== null) {
        this.vaccinationService.updateAppointment(this.editingIndex, appointment);
      } else {
        this.vaccinationService.addAppointment(appointment);
      }

      this.successMessage = this.editingIndex !== null ? 'Appointment updated successfully!' : 'Appointment booked successfully!';
      this.appointmentForm.reset();
      this.editingIndex = null;

      // Clear the success message after 3 seconds
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    }
  }
}
