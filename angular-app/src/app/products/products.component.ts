import { Component, OnInit } from '@angular/core';
import { Product } from '../core';

const data: Product[] = [
  {
    id: 10,
    name: 'Strawberries',
    description: '16oz package of fresh organic strawberries',
    quantity: 1,
  },
  {
    id: 20,
    name: 'Sliced bread',
    description: 'Loaf of fresh sliced wheat bread',
    quantity: 1,
  },
  {
    id: 30,
    name: 'Apples',
    description: 'Bag of 7 fresh McIntosh apples',
    quantity: 1,
  },
];

@Component({
  selector: 'app-products',
  template: `
    <div class="content-container">
      <app-list-header
        title="Products"
        (refresh)="getProducts()"
      ></app-list-header>
      <div class="columns is-multiline is-variable">
        <div class="column is-8">
          <app-product-list [products]="products"></app-product-list>
        </div>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [...data];
  }
}
