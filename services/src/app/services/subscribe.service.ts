import { Injectable } from '@angular/core';

@Injectable()
export class SubscribeService {
  onSubscribeClicked(type: string) {
    alert(
      'Thank you for your ' +
        type +
        ' subscription. You can now enjoy our services.'
    );
  }
}
