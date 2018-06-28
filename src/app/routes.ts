/*
Routes
*/
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProtectComponent } from './components/protect/protect.component';
import { AuthGuardService } from './services/auth-guard.service';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  {
  path: 'protect',
   component: ProtectComponent,
   canActivate: [AuthGuardService]
 },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
// SI QUEREMOS TRABAJAR CON PARAMETROS
//APP_ROUTES, {useHash:true}
