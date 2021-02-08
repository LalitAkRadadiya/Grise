import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenstatsComponent } from './tokenstats/tokenstats.component';
import { TokeninfoComponent } from './tokeninfo/tokeninfo.component';
import { LiquidityEventComponent } from './dashboard/liquidity-event/liquidity-event.component';
import { MiseStakingComponent } from './dashboard/mise-staking/mise-staking.component';
import { TransactionHistoryComponent } from './dashboard/transaction-history/transaction-history.component';
import { RefundHistoryComponent } from './dashboard/refund-history/refund-history.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'liquidity_event',component:LiquidityEventComponent},
    {path : 'mise_staking', component: MiseStakingComponent},
    {path:'transaction_refund', component:TransactionHistoryComponent},
    {path : 'refund_history',component:RefundHistoryComponent}
  ]},
  {path:'tokenstats',component:TokenstatsComponent},
  {path:'tokeninfo',component:TokeninfoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingmod =[HomeComponent, ReservationComponent, DashboardComponent, LiquidityEventComponent,MiseStakingComponent,TransactionHistoryComponent,RefundHistoryComponent,TokenstatsComponent, TokeninfoComponent];
