import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from 'src/app/services/data/products.data';
import { GenerateRandomPrice } from '../../data/products-sales.data';
import { ProductService } from 'src/app/services/product/product.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-off',
  templateUrl: './add-off.component.html',
  styleUrls: ['./add-off.component.scss']
})
export class AddOffComponent implements OnInit {
  product: Product;
  products: Product[];
  randomNumber: number;
  price: number;
  form: FormGroup;
  date: string;

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.getProducts();
    this.form = this.fb.group({
      date: ['', Validators.required]
    });
  }

  getProducts() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data.filter(x => !x.off);
      }, error => {
        console.log(error);
      }
    );
  }

  selectProduct(product: Product) {
    this.product = product;
    this.randomNumber = GenerateRandomPrice();
  }

  getTenPercent(price: number) {
    return price - (price * 0.1);
  }

  removeProduct() {
    let invalid = false;
    if (!this.price) {
      this.snackBar.open('Por favor, adicionar um valor de desconto para a promoção.', 'OK', { duration: 2000 });
      invalid = true;
    }

    if (this.form.invalid) {
      this.snackBar.open('Por favor, selecione um período para a promoção.', 'OK', { duration: 2000 });
      invalid = true;
    }

    if (invalid) {
      return;
    }

    this.product.off = true;
    this.product.priceOff = this.price;
    this.productService.update(this.product)
      .then(() => {
        this.snackBar.open('Promoção adicionar com sucesso!', 'OK', { duration: 2000 });
        this.router.navigate(['/promocoes']);
      });
  }
}
