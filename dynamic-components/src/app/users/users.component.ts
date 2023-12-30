import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { viewContainerDirective } from '../directives/view-container.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  users: User[] = [];
  userToDelete!: User;

  showConfirmDeleteModal: boolean = false;

  userDeletionConfirmationSubscription: Subscription | undefined;

  @ViewChild(viewContainerDirective) container!: viewContainerDirective;

  ngOnInit() {
    this.users = this.userService.users;
  }

  onDeleteClicked(user: User) {
    this.userToDelete = user;
    this.showConfirmDeleteModal = !this.showConfirmDeleteModal;
  }

  onUserDeletionConfirmed(value: boolean) {
    this.showConfirmDeleteModal = !this.showConfirmDeleteModal;
    if (value) {
      this.userService.deleteUser(this.userToDelete);
    }
  }

  showConfirmDeleteModalChanged(user: User) {
    const confirmDeleteComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        ConfirmDeleteComponent
      );

    const containerViewRef: ViewContainerRef = this.container.viewContainer;

    containerViewRef.clear();

    const confirmDeleteComponentRef = containerViewRef.createComponent(
      confirmDeleteComponentFactory
    );

    confirmDeleteComponentRef.setInput('userToDelete', user);

    this.userDeletionConfirmationSubscription =
      confirmDeleteComponentRef.instance.userDeletionConfirmation.subscribe(
        (confirmationStatus) => {
          this.userDeletionConfirmationSubscription?.unsubscribe();
          containerViewRef.clear();
          if (confirmationStatus) this.userService.deleteUser(user);
        }
      );
  }

  ngOnDestroy() {
    this.userDeletionConfirmationSubscription?.unsubscribe();
  }
}
