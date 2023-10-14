import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  searchInput: string = '';
  router: Router = inject(Router);

  // Navigate to courses page with search query
  searchForCourses() {
    this.router.navigate(['/courses'], {
      queryParams: { search: this.searchInput },
    });
  }
}
