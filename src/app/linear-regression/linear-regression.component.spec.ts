import { CalculateComponent } from "../common/calculate";

describe('CalculateComponent', () => {
  let calculateComponent: CalculateComponent;
  let Data_Test1: {
    proxy_size: number[];
    actual_added: number[];
  };

  let Data_Test2: {
    proxy_size: number[];
    actual_develop: number[];
  };

  let Data_Test3: {
    plan_added: number[];
    actual_added: number[];
  };

  let Data_Test4: {
    plan_added: number[];
    actual_develop: number[];
  };

  let x: number;

  beforeEach(() => {
    calculateComponent = new CalculateComponent();

    Data_Test1 = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    Data_Test2 = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };

    Data_Test3 = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    Data_Test4 = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };
    x = 386;
  });

//Test 1
  it('should calculate B0 correctly with Data_Test1', () => {
    const expectedB0 = -22.55;
    const actualB0 = calculateComponent.beta0(Data_Test1.proxy_size, Data_Test1.actual_added);
    expect(actualB0).toBeCloseTo(expectedB0);
  });

  it('should calculate B1 correctly with Data_Test1', () => {
    const expectedB1 = 1.7279;
    const actualB1 = calculateComponent.beta1(Data_Test1.proxy_size, Data_Test1.actual_added);
    expect(actualB1).toBeCloseTo(expectedB1);
  });

  it('should calculate yk correctly with Data_Test1 and x=386', () => {
    const expectedYk = 644.429;
    const actualYk = calculateComponent.yk(Data_Test1.proxy_size, Data_Test1.actual_added, x);
    expect(actualYk).toBeCloseTo(expectedYk);
  });

//Test 2
  it('should calculate B0 correctly with Data_Test2', () => {
    const expectedB0 = -4.039;
    const actualB0 = calculateComponent.beta0(Data_Test2.proxy_size, Data_Test2.actual_develop);
    expect(actualB0).toBeCloseTo(expectedB0);
  });

  it('should calculate B1 correctly with Data_Test2', () => {
    const expectedB1 = 0.1681;
    const actualB1 = calculateComponent.beta1(Data_Test2.proxy_size, Data_Test2.actual_develop);
    expect(actualB1).toBeCloseTo(expectedB1);
  });

  it('should calculate yk correctly with Data_Test2 and x=386', () => {
    const expectedYk = 60.858;
    const actualYk = calculateComponent.yk(Data_Test2.proxy_size, Data_Test2.actual_develop, x);
    expect(actualYk).toBeCloseTo(expectedYk);
  });

//Test 3
  it('should calculate B0 correctly with Data_Test3', () => {
    const expectedB0 = -23.92;
    const actualB0 = calculateComponent.beta0(Data_Test3.plan_added, Data_Test3.actual_added);
    expect(actualB0).toBeCloseTo(expectedB0);
  });

  it('should calculate B1 correctly with Data_Test3', () => {
    const expectedB1 = 1.43097;
    const actualB1 = calculateComponent.beta1(Data_Test3.plan_added, Data_Test3.actual_added);
    expect(actualB1).toBeCloseTo(expectedB1);
  });

  it('should calculate yk correctly with Data_Test3 and x=386', () => {
    const expectedYk = 528.4294;
    const actualYk = calculateComponent.yk(Data_Test3.plan_added, Data_Test3.actual_added, x);
    expect(actualYk).toBeCloseTo(expectedYk);
  });

//Test 4
  it('should calculate B0 correctly with Data_Test4', () => {
    const expectedB0 = -4.604;
    const actualB0 = calculateComponent.beta0(Data_Test4.plan_added, Data_Test4.actual_develop);
    expect(actualB0).toBeCloseTo(expectedB0);
  });

  it('should calculate B1 correctly with Data_Test4', () => {
    const expectedB1 = 0.14016;
    const actualB1 = calculateComponent.beta1(Data_Test4.plan_added, Data_Test4.actual_develop);
    expect(actualB1).toBeCloseTo(expectedB1);
  });

  it('should calculate yk correctly with Data_Test4 and x=386', () => {
    const expectedYk = 49.4994;
    const actualYk = calculateComponent.yk(Data_Test4.plan_added, Data_Test4.actual_develop, x);
    expect(actualYk).toBeCloseTo(expectedYk);
  });
});
