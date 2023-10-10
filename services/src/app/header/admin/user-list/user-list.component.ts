import { Component, EventEmitter, Inject } from '@angular/core';
import { USER_SERVICE_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  // Injecting using injection token
  constructor(@Inject(USER_SERVICE_TOKEN) private userService: UserService) {}

  userList = this.userService.getAllUsers();

  showUserDetails(user: User) {
    this.userService.onShowUserDetails(user);
  }
}
