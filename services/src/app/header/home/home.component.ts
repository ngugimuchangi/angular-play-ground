import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // Alternative to using the @Inject decorator
  // or injecting the service in the constructor
  private subService = inject(SubscribeService);
}
