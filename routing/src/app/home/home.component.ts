import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  fragmentSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.fragmentSubscription = this.activatedRoute.fragment.subscribe(
      (fragment) => {
        if (fragment) {
          this.jumpToSection(fragment);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
  }

  jumpToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
