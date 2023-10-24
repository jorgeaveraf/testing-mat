export class CalculateComponent {
    sum(arr: number[]): number {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    mean(arr: number[]): number {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum / arr.length;
      }

    sumSquared(arr: number[]): number {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += Math.pow(arr[i], 2);
        }
        return sum;
      }
    
    sumxy(arr1: number[], arr2: number[]): number {
        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
          sum += arr1[i] * arr2[i];
        }
        return sum;
      }

    beta1(arr1: number[], arr2: number[]): number {
        return (this.sumxy(arr1, arr2) - this.sum(arr1) * this.sum(arr2) / arr1.length) / (this.sumSquared(arr1) - Math.pow(this.sum(arr1), 2) / arr1.length);
      }
    
    rxy(arr1: number[], arr2: number[]): number {
        return (arr1.length * this.sumxy(arr1, arr2) - this.sum(arr1) * this.sum(arr2)) / Math.sqrt((arr1.length * this.sumSquared(arr1) - Math.pow(this.sum(arr1), 2)) * (arr1.length * this.sumSquared(arr2) - Math.pow(this.sum(arr2), 2)));
      }
    
    rSquared(arr1: number[], arr2: number[]): number {
        return Math.pow(this.rxy(arr1, arr2), 2);
      }
    
    beta0(arr1: number[], arr2: number[]): number {
        return this.round(this.mean(arr2) - this.beta1(arr1, arr2) * this.mean(arr1));
      }
    
    yk(arr1: number[], arr2: number[], xk: number): number {
        return this.round(this.beta0(arr1, arr2) + this.beta1(arr1, arr2) * xk);
      }

    round(value: number): number {
        return Math.round(value * 100) / 100; 
      }
}