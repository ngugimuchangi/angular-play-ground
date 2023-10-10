import { Component, Input, OnInit, inject } from '@angular/core';
import { USER_SERVICE_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  selectedUser: User | undefined;
  userService: UserService = inject(USER_SERVICE_TOKEN);

  ngOnInit() {
    this.userService.onUserDetailsClicked.subscribe(
      (user: User) =>
        (this.selectedUser = user !== this.selectedUser ? user : undefined)
    );
  }
}
