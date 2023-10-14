import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  routeParamsSubscription: Subscription | undefined | null;
  course: Course | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {
    // Fails in ngOnInit because the location has already changed i.e the course is not in the history state
    // since a new location has been pushed to the history state
    this.course = this.router.getCurrentNavigation()?.extras.state as Course;
  }

  ngOnInit(): void {
    // this.course = history.state as Course; // this is the same as the constructor
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }
}
