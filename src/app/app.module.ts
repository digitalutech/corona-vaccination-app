import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { SummaryComponent } from './summary/summary.component';
import { VaccinationService } from './vaccination.service';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentListComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
    AppRoutingModule
  ],
  providers: [VaccinationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
