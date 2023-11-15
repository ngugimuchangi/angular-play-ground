import { Component, Input } from '@angular/core';
import { products } from './product-list';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  selectedProduct: Product;
  products = products;
  @Input() searchText = '';

  totalProductCount = products.length;

  totalProductsInStock = products.filter((product) => product.is_in_inventory)
    .length;

  totalProductsOutOfStock = products.filter(
    (product) => !product.is_in_inventory
  ).length;

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string) {
    this.selectedFilterRadioButton = value;
  }
}
