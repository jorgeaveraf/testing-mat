import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { MediasService } from '../services/media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  arr = 0;
  arr2 = 0;
  stdDevButtonText = 0;
  mean = 0;

  constructor(private mediaComponent: MediaComponent, private mediasService: MediasService, private router: Router) {}

  calculateProxySizeStandardDeviation() {
    this.mediasService.getProxySize().subscribe(response => {
      console.log(response);
      const data = response.data;
      const mean = this.mediaComponent.mean(data);
      this.arr = this.calcularDesviacionEstandar(data, mean);
      this.stdDevButtonText = this.round(this.arr);
      this.mean = this.round(mean);
    });
  }

  calculateHoursDevStandardDeviation() {
    this.mediasService.getDevHours().subscribe(response => {
      console.log(response);
      const data = response.data;
      const mean = this.mediaComponent.mean(data);
      this.arr2 = this.calcularDesviacionEstandar(data, mean);
      this.stdDevButtonText = this.round(this.arr2);
      this.mean = this.round(mean);
    });
  }

  calcularDesviacionEstandar(data: number[], mean: number): number {
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = this.mediaComponent.mean(squaredDifferences);
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }

  round(value: number): number {
    return Math.round(value * 100) / 100;
  }

  onArrIClick() {
    this.calculateProxySizeStandardDeviation();
  }

  home() {
    this.router.navigate(['']);
  }
}
