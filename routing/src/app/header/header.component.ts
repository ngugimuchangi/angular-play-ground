import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
