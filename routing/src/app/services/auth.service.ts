import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;
  constructor(private userService: UserService) {}

  login(username: string, password: string): User | undefined {
    const user = this.userService.users.find(
      (user) => user.username === username && user.password === password
    );
    this.isLogged = !!user;
    return user;
  }

  logout(): void {
    this.isLogged = false;
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }
}
