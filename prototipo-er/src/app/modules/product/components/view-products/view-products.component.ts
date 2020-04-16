import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  products: Product[];
  states: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
    // this.productService.addAllProducts();

    this.states = [
      'Mais Vendidos', 'Menos Vendidos', 'Maior Quantidade', 'Mais Buscado'
    ];
  }

  getProducts() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data;
      }, error => {
        console.log(error);
      }
    );
  }

}
