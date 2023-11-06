export class simpsonRule{
    static x(x0: number, x1:number, num_segment:number) {
        let w = (x1 - x0) / num_segment;
        let x = [];
        for (let i = 0; i <= num_segment; i++) {
            x.push(x0 + i * w);
        }
        return x;
}

    static fx1(x: number[]){
        let fx = [];
        let n = 2;
        for (let i = 0; i < x.length; i++) {
            fx.push(x[i]*n);
        }
        return fx;
    }

    static fx2(x: number[]){
        let fx = [];
        let n = 2;
        for (let i = 0; i < x.length; i++) {
            fx.push(x[i]**n);
        }
        return fx;
    }

    static fx3(x: number[]){
        let fx = [];
        let n = 1;
        for (let i = 0; i < x.length; i++) {
            fx.push(this.round(n/x[i]));
        }
        return fx;
    }

    static fx4(x: number[], dof: number){
        let fx = [];
        let n=(dof+1)/2*-1
        let res
        for (let i = 0; i < x.length; i++) {
            res=(this.gamma((dof+1)/2)/(Math.pow(dof*Math.PI,0.5)*(this.gamma(dof/2))))*Math.pow(1+Math.pow(x[i],2)/dof,n)
            fx.push(this.round(res));
        }
        return fx;
    }


    static simpson(x: number[], fx: number[]){
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

    static gamma(x: number): number {
        if (x == 1) {
          return 1;
        } else if (x == 0.5) {
          return Math.sqrt(Math.PI);
        } else {
          return (x - 1) * this.gamma(x - 1);
        }
      }
    
    

    static round(value: number): number {
        return Math.round(value * 1000) / 1000; 
      }

}
    