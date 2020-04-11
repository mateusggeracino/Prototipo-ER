import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-sales-analisis',
  templateUrl: './sales-analisis.component.html',
  styleUrls: ['./sales-analisis.component.scss']
})
export class SalesAnalisisComponent implements OnInit {
  
  chart: Chart;
  titleChart: string;
  amountDays: number;
  private chartSelected: string;
  private fromDate: Date;
  private toDate: Date;

  constructor() {
    this.chartSelected = 'salesChart';
    this.amountDays = 7;

    this.toDate = new Date();
    this.fromDate = this.removeDate(this.toDate, this.amountDays);
  }
  
  ngOnInit() {
    this.changeChart();
  }

  private changeToChart(chart: string) {
    this.chartSelected = chart;
    this.changeChart();
  }
  
  private changeChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    if (this.chartSelected == 'salesChart') {
      this.createSalesChart();
    } else if (this.chartSelected == 'productChart') {
      this.createProductSalesChart();
    }
  }

  private createSalesChart() {
    this.titleChart = 'Vendas realizadas';
    this.createLineChart();
  }

  private createProductSalesChart() {
    this.titleChart = 'Produtos vendidos';
    this.createLineChart();
  }

  private createBarChart() {
    const data = this.generateDaysValues();
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.getDates(),
        datasets: [{
          label: '# de vendas',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
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
    
    for (let i = 0; i < this.amountDays+1; i++) {
      values[i] = this.getRandomInt(0, 100);
    }

    return values;
  }

  private createLineChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.getDates(),
        datasets: [{
          label: '# de vendas',
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
            display: true
          }],
        }
      }
    });
  }

  private saveDate($event) {
    const value = $event.value;
    this.amountDays = this.datediff(value.begin, value.end);
    this.fromDate = value.begin;
    this.toDate = value.end;
    this.changeChart();
  }

  private datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
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
      dateArray.push(currentDate)
      currentDate = this.removeDate(currentDate, 1);
    }

    console.log(dateArray);

    const strDateArray = [];
    for (let i = dateArray.length -1; i >= 0; i--) {
      const month = dateArray[i].getMonth() + 1;
      const day = (dateArray[i].getDate()) < 10 ? `0${dateArray[i].getDate()}` : dateArray[i].getDate();

      strDateArray.push(`${day}/${month}`);
    }

    console.log(strDateArray);

    return strDateArray;
  }

  private removeDate(date: Date, days: number) {
    var from = new Date(date.valueOf())
    from.setDate(from.getDate() - days);
    return from;
  }

}
