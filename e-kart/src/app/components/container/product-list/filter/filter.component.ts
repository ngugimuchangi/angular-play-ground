import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() all: number = 0;

  @Input() inStock: number = 0;

  @Input() outOfStock: number = 0;

  @Output() selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  OnSelectedFilterRadioButtonChanged() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
