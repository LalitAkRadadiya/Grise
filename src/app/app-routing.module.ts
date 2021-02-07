import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenstatsComponent } from './tokenstats/tokenstats.component';
import { TokeninfoComponent } from './tokeninfo/tokeninfo.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tokenstats',component:TokenstatsComponent},
  {path:'tokeninfo',component:TokeninfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingmod =[HomeComponent, ReservationComponent, DashboardComponent, TokenstatsComponent, TokeninfoComponent];
