import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}

  users: User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mary Jane', 'Female', 'Yearly', 'Inactive'),
    new User('Mark Tyler', 'Male', 'Quarterly', 'Active'),
  ];

  onUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  onShowUserDetails(user: User) {
    this.onUserDetailsClicked.emit(user);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    this.logger.logMessage(name, status);
  }
}
