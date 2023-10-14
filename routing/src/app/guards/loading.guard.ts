import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

export const loadingGuard: ResolveFn<Observable<Course[]>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const courseService = inject(CourseService);
  return courseService.getAllCourses();
};
