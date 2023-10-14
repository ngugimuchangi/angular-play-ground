import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { PopularComponent } from './home/popular/popular.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuard } from './guards/auth.guard';
import { CoursesGuardService } from './services/courses-guard.service';
import { formSubmissionGuard } from './guards/form-submission.guard';
import { loadingGuard } from './guards/loading.guard';

// ROUTES DEFINITION
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [formSubmissionGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    resolve: { courses: loadingGuard },
  },
  // { path: 'courses/:id', component: CourseDetailComponent },
  {
    path: 'courses',
    canActivateChild: [CoursesGuardService],
    children: [
      { path: 'popular', component: PopularComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
        // canActivate: [AuthGuardService],
        // canActivate: [AuthGuard],
      },
      { path: ':id', component: CourseDetailComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
