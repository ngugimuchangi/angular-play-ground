import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  logMessage(name: string, status: string) {
    console.log(
      `A new user with name ${name} and status ${status} was created at ${new Date().toLocaleString()}`
    );
  }
}
