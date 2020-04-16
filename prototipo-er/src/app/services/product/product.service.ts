import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from 'src/app/services/data/products.data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product> = this.afs.collection('products');

  constructor(private afs: AngularFirestore) { }

  getAll(): Observable<Product[]> {
    return this.productsCollection.valueChanges();
  }

  create(product: Product) {
    product.code = this.afs.createId();
    this.productsCollection.doc(product.code).set(product);
  }

  delete(product: Product) {
    return this.productsCollection.doc(product.code).delete();
  }

  update(product: Product) {
    return this.productsCollection.doc(product.code).set(product);
  }

  addAllProducts() {
    getProducts().forEach(product => {
      debugger
      this.create(product);
    });
  }
}
