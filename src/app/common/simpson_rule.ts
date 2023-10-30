/*Some functions in simpson:
simpson()
2x()
x2()
1_x()
t()
*/
export class simpsonRule{
    x(x0: number, x1:number, num_segment:number) {
        let w = (x1 - x0) / num_segment;
        let x = [];
        for (let i = 0; i <= num_segment; i++) {
            x.push(x0 + i * w);
        }
        return x;
}

    fx1(x: number[]){
        let fx = [];
        let n = 2;
        for (let i = 0; i < x.length; i++) {
            fx.push(x[i]*n);
        }
        return fx;
    }

    fx2(x: number[]){
        let fx = [];
        let n = 2;
        for (let i = 0; i < x.length; i++) {
            fx.push(x[i]**n);
        }
        return fx;
    }

    fx3(x: number[]){
        let fx = [];
        let n = 1;
        for (let i = 0; i < x.length; i++) {
            fx.push(this.round(n/x[i]));
        }
        return fx;
    }


    simpson(x: number[], fx: number[]){
        let sum = 0;
        let w3 = (x[1] - x[0]) / 3;
        for (let i = 0; i < x.length; i++) {
            if (i == 0 || i == x.length - 1) {
                sum += fx[i]*w3;
            } else if (i % 2 == 1) {
                sum += 4 * fx[i]*w3;
            } else {
                sum += 2 * fx[i]*w3;
            }
        }
        return sum ;
    }

    round(value: number): number {
        return Math.round(value * 1000) / 1000; 
      }

}
    