import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent {
  private courseService = inject(CourseService);
  popularCourses: Course[] = [];
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(
      (c) => c.rating >= 4.5
    );
  }

  // Navigate to course detail page
  navigateToCourse() {
    // this.router.navigate(['courses']);
    this.router.navigateByUrl('courses');

    // relative navigation
    // this.router.navigate(['courses'], { relativeTo: this.activatedRoute });
  }
}
