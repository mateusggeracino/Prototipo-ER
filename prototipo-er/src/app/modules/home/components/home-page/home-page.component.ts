import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  amountDays: number = 5;

  constructor() { }

  ngOnInit() {
    this.createLineChart(['07/04', '08/04', '09/04', '10/04', '11/04'], 'chart-sales', 'line');
    this.createLineChart(['07/04', '08/04', '09/04', '10/04', '11/04'], 'chart-product-sales', 'line');
    this.createLineChart(['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'], 'chart-products-most-sold', 'pie');
    this.createLineChart(['Product 7', 'Product 8', 'Product 9', 'Product 10', 'Product 11', 'Product 12'], 'chart-stock-products', 'bar');
  }

  private generateDaysValues(): number[] {
    const values = [];

    console.log('generateDaysValues', this.amountDays);

    for (let i = 0; i < this.amountDays + 1; i++) {
      values[i] = this.getRandomInt(0, 100);
    }

    return values;
  }

  private createLineChart(labels: string[], element: string, type: string) {
    const chart = new Chart(element, {
      type,
      data: {
        labels,
        datasets: [{
          label: '# ganhos em vendas',
          data: this.generateDaysValues(),
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
