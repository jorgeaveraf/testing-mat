import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { MediasService } from '../services/media.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  arr = 0;
  arr2 = 0;

  constructor(private mediaComponent: MediaComponent, private mediasService: MediasService) {}

  calculateProxySizeStandardDeviation() {
    this.mediasService.getProxySize().subscribe(data => {
      const mean = this.mediaComponent.mean(data);
      this.arr = this.calcularDesviacionEstandar(data, mean);
    });
  }

calculateHoursDevStandardDeviation() {
  this.mediasService.getProxySize().subscribe(data => {
    const mean = this.mediaComponent.mean(data);
    this.arr2 = this.calcularDesviacionEstandar(data, mean);
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
}
