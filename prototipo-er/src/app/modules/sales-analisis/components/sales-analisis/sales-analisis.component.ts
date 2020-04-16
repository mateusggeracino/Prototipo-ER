import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from '../../../../services/data/products.data';

@Component({
  selector: 'app-sales-analisis',
  templateUrl: './sales-analisis.component.html',
  styleUrls: ['./sales-analisis.component.scss']
})
export class SalesAnalisisComponent implements OnInit {

  products: Product[];
  productLabels: string[];

  chart: Chart;
  titleChart: string;
  amountDays: number;
  showDatePicker: boolean;
  private chartSelected: string;
  private fromDate: Date;
  private toDate: Date;

  constructor() {
    this.products = getProducts();
    this.productLabels = [];
    for (let i in this.products) {
      this.productLabels[i] = this.products[i].title;
    }

    this.chartSelected = 'salesChart';
    this.amountDays = 7;

    this.toDate = new Date();
    this.fromDate = this.removeDate(this.toDate, this.amountDays);
  }

  ngOnInit() {
    this.changeChart(null);
  }

  changeToChart(chart: string, product: Product) {
    this.chartSelected = chart;
    this.changeChart(product);
  }

  changeChart(product: Product) {
    if (this.chart) {
      this.chart.destroy();
    }

    if (this.chartSelected === 'salesChart') {
      this.showDatePicker = true;
      this.createSalesChart();
    } else if (this.chartSelected === 'productChart') {
      this.showDatePicker = true;
      this.createProductSalesChart(product);
    } else if (this.chartSelected === 'mostSoldProducts') {
      this.showDatePicker = false;
      this.createMostSoldProducts();
    } else if (this.chartSelected === 'lessSoldProducts') {
      this.showDatePicker = false;
      this.createLessSoldProducts();
    }
  }

  createMostSoldProducts() {
    this.titleChart = 'Produtos mais vendidos';

    const quantities = [];
    for (let i in this.products) {
      quantities[i] = this.products[i].quantityAvailable;
    }

    this.createBarChart(quantities);
  }

  createLessSoldProducts() {
    this.titleChart = 'Produtos menos vendidos';

    const quantities = [];
    for (let i in this.products) {
      quantities[i] = this.products[i].sold;
    }

    this.createBarChart(quantities);
  }

  createSalesChart() {
    this.titleChart = 'Ganhos em vendas';
    this.createLineChart([100, 2, 35, 40, 55, 60, 10, 250]);
  }

  createProductSalesChart(product: Product) {
    this.titleChart = 'Ganhos com produtos';
    this.createLineChart(product.earnedMoney);
  }

  createBarChart(data: number[]) {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.productLabels,
        datasets: [{
          label: '# de vendas do produto',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(55, 99, 122, 0.2)',
            'rgba(25, 19, 132, 0.2)',
            'rgba(140, 19, 32, 0.2)',
            'rgba(140, 240, 32, 0.5)',
            'rgba(140, 240, 140, 0.2)',
            'rgba(50, 50, 50, 0.2)'
          ],
          borderColor: [

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

  private generateDaysValues(): number[] {
    const values = [];

    console.log('generateDaysValues', this.amountDays);

    for (let i = 0; i < this.amountDays + 1; i++) {
      values[i] = this.getRandomInt(0, 100);
    }

    return values;
  }

  private createLineChart(data: number[]) {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.getDates(),
        datasets: [{
          label: '# ganhos em vendas',
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
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 129, 84, 1)'
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
            display: true
          }],
          yAxes: [{
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

  saveDate($event: any) {
    const value = $event.value;
    this.amountDays = this.datediff(value.begin, value.end);
    this.fromDate = value.begin;
    this.toDate = value.end;
    this.changeChart(null);
  }

  private datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  private getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getDates() {
    const dateArray: Date[] = new Array<Date>();
    let currentDate = this.toDate;
    while (currentDate >= this.fromDate) {
      dateArray.push(currentDate);
      currentDate = this.removeDate(currentDate, 1);
    }

    console.log(dateArray);

    const strDateArray = [];
    for (let i = dateArray.length - 1; i >= 0; i--) {
      const month = dateArray[i].getMonth() + 1;
      const day = (dateArray[i].getDate()) < 10 ? `0${dateArray[i].getDate()}` : dateArray[i].getDate();

      strDateArray.push(`${day}/${month}`);
    }

    console.log(strDateArray);

    return strDateArray;
  }

  private removeDate(date: Date, days: number) {
    const from = new Date(date.valueOf());
    from.setDate(from.getDate() - days);
    return from;
  }
}
