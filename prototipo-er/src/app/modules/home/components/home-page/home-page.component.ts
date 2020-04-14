import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from '../../../product/data/products.data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: Product[];
  amountDays: number = 5;

  constructor() {
    this.products = getProducts();
  }

  ngOnInit() {
    this.createLineChart(['07/04', '08/04', '09/04', '10/04', '11/04'], 'chart-sales', 'line', [100, 2, 35, 40, 55, 60, 10, 250]);
    this.createLineChart(['07/04', '08/04', '09/04', '10/04', '11/04'], 'chart-product-sales', 'line', [10, 25, 350, 400, 55, 60, 10, 45]);

    const productLabels = [];
    for (let i in this.products) {
      productLabels[i] = this.products[i].title;
    }

    this.createMostSoldProducts(productLabels);
    this.createInventoryChart(productLabels);
  }

  private createMostSoldProducts(labels: string[]) {
    const quantities = [];
    for (let i in this.products) {
      quantities[i] = this.products[i].sold;
    }

    this.createLineChart(labels, 'chart-products-most-sold', 'pie', quantities);
  }

  private createInventoryChart(labels: string[]) {
    const quantities = [];
    for (let i in this.products) {
      quantities[i] = this.products[i].quantityAvailable;
    }

    this.createLineChart(labels, 'chart-stock-products', 'bar', quantities);
  }

  private generateDaysValues(): number[] {
    const values = [];

    console.log('generateDaysValues', this.amountDays);

    for (let i = 0; i < this.amountDays + 1; i++) {
      values[i] = this.getRandomInt(0, 100);
    }

    return values;
  }

  private createLineChart(labels: string[], element: string, type: string, data: number[]) {
    new Chart(element, {
      type,
      data: {
        labels,
        datasets: [{
          label: '#',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false,
            ticks: {
              callback: function(value, index, values) {
                return 'R$ ' + value;
              }
            }
          }]
        }
      }
    });
  }

  private datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  private getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
