import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Routing';
  isLoading: boolean = false;

  router: Router = inject(Router);
  routerEventsSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.routerEventsSubscription = this.router.events.subscribe(
      (routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.isLoading = true;
        }

        if (
          routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError
        ) {
          this.isLoading = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription?.unsubscribe();
  }
}
