import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProtectComponent } from './components/protect/protect.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './routes';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    ProtectComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
