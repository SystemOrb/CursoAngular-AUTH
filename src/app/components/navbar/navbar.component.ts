import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public auth:AuthService) {
    auth.handleAuthentication();
  }

   authLogin()
  {
    this.auth.login();
  }
  logout()
  {
    this.auth.logout();
  }
  verification()
  {
    return this.auth.isAuthenticated();
  }
}
