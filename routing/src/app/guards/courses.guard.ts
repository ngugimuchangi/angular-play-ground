import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const coursesGuard: CanActivateFn = (route, state) => {
  return AuthGuard(route, state);
};
