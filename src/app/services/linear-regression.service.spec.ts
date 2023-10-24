import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LinearRegressionService } from './linear-regression.service';
import { HttpClientModule } from '@angular/common/http';

describe('LinearRegressionService', () => {
  let service: LinearRegressionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Utiliza HttpClientTestingModule para pruebas HTTP
      providers: [LinearRegressionService], // Agrega el servicio que deseas probar
    });

    service = TestBed.inject(LinearRegressionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
