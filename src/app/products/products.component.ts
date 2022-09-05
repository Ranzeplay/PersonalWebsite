import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from './model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: ProductModel[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  ngOnInit() {
    this.http.get('assets/products.json').subscribe(data => {
      console.log(data);
      const dataString = JSON.stringify(data);
      this.products = JSON.parse(dataString);
    });
  }
}
