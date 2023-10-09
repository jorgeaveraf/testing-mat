function factorial(input: number): number {
    if (input == 0) {
        return 1;
    }
    else if (input < 0) {
        return 0;
    }
    else if (input > 15) {
        return 0;
    }
    else {
        let fact: number = 1;
        for (let i: number = 1; i <= input; i++) {
            fact = fact * i;
        }
        return fact;

}
}

export { factorial };

