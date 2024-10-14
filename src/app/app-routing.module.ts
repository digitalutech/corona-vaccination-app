import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'book', component: AppointmentComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  { path: '**', redirectTo: '/book' } // Wildcard route to catch undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
