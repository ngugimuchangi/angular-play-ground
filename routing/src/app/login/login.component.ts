import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('username') username!: ElementRef<HTMLInputElement>;
  @ViewChild('password') password!: ElementRef<HTMLInputElement>;

  queryParamsSubscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.queryParamsSubscription = this.activatedRoute.queryParamMap.subscribe(
      (params) => {
        const isLoggedOut = params.get('logout') || '';
        if (isLoggedOut === 'true') this.logout();
      }
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
  }

  login(): void {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;
    const user = this.authService.login(username, password);
    if (user && this.authService.isAuthenticated())
      this.router.navigateByUrl('home');
    else alert('Invalid credentials');
  }

  logout(): void {
    this.authService.logout();
  }
}
