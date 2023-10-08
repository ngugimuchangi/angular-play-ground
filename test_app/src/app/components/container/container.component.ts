import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  searchText: string = '';
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
  updateSearchText(value: string) {
    this.searchText = value;
  }
}
