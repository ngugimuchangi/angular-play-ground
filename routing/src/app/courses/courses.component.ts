import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  AllCourses: Course[] | undefined;

  searchQuery: string | null = '';

  courseSubscription: Subscription | undefined;

  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.courseSubscription = this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap) => {
        this.searchQuery = queryParamMap.get('search');
        if (!this.searchQuery)
          this.AllCourses = this.activatedRoute.snapshot.data['courses'];
        else
          this.AllCourses = this.coursesService.searchCourses(this.searchQuery);
      }
    );

    this.destroyRef.onDestroy(() => {
      this.courseSubscription?.unsubscribe();
    });
  }
}
