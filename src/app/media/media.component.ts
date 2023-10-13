import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  arr = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
  arr2 = [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

  mean(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return this.round(sum / arr.length);
  }

  round(value: number): number {
    return Math.round(value * 100) / 100; // Redondea a dos decimales
  }
  
}
