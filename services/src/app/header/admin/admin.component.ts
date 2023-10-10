import { Component, Inject } from '@angular/core';
import { USER_SERVICE_TOKEN } from 'src/app/app.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  constructor(@Inject(USER_SERVICE_TOKEN) private userService: UserService) {}

  createUser() {
    this.userService.createUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
  }
}
