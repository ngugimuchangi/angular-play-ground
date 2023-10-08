import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchText: string = '';

  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }

  onSearch(searchInputElement: HTMLInputElement) {
    this.searchText = searchInputElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
