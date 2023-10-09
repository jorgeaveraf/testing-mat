import{factorial} from './factorial';

describe('factorial test suite', () => {
    
    it('Should return 1 if x is 0', () => {
        expect(factorial(0)).toEqual(1);
    });

    it('Should return 0 if x is negative', () => {
        expect(factorial(-1)).toEqual(0);
    });

    it('Should return 2 if x is 2', () => {
        expect(factorial(2)).toEqual(2);
    });

    it('Should return 6 if x is 3', () => {
        expect(factorial(3)).toEqual(6);
    });

    it('Should return 24 if x is 4', () => {
        expect(factorial(4)).toEqual(24);
    });

    it('Should return 120 if x is 5', () => {
        expect(factorial(5)).toEqual(120);
    });

    it('Should return 0 if x > 15', () => {
        expect(factorial(16)).toEqual(0);
    });

    
}); 