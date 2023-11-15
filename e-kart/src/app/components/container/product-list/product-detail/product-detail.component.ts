import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Input() productListComponent: ProductListComponent;
  product: Product;
  textColor: string = 'white';
  backgroundColor: string = '#282828';

  ngOnInit() {
    this.product = this.productListComponent.selectedProduct;
  }
}
