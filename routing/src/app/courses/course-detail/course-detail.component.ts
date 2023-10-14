import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit, DoCheck, OnDestroy {
  selectedCourse: Course | undefined;
  courseId!: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  paramSubscription: Subscription | undefined;

  // Get course id from route params using observable
  ngOnInit() {
    /* Deprecated way of getting params from route
    this.paramSubscription = this.activeRoute.params.subscribe((data) => {
      const idParam = data['id'];
      if (!idParam || Object.is(Number(idParam), NaN)) return;

      this.courseId = parseInt(idParam, 10);
      this.selectedCourse = this.courseService.getCourseById(this.courseId);
    });
    */

    // Another way to get course id from route params using get params method
    this.paramSubscription = this.activeRoute.paramMap.subscribe((paramMap) => {
      const idParam = paramMap.get('id');
      if (!idParam || Object.is(Number(idParam), NaN)) return;

      this.courseId = parseInt(idParam, 10);
      this.selectedCourse = this.courseService.getCourseById(this.courseId);
    });
  }

  // Alternative way to get course id from route params using snapshot method
  ngDoCheck() {
    /*
    const idParam = // this.activeRoute.snapshot.params['id']
    const idParam: string | null = this.activeRoute.snapshot.paramMap.get('id');
    if (!idParam || Object.is(Number(idParam), NaN)) return;
    this.courseId = Number(idParam);
    this.selectedCourse = this.courseService.getCourseById(this.courseId);
    */
  }

  ngOnDestroy() {
    this.paramSubscription?.unsubscribe();
  }
}
