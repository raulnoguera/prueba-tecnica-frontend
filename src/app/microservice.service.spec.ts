import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Microservice } from './microservice.service';

describe('MicroserviceService', () => {
  let service: Microservice;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Microservice],
    });

    service = TestBed.inject(Microservice);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('debería obtener el conteo de géneros', () => {
    const expectedCount = [
      { genero: 'Rock', conteo: 5 },
      { genero: 'Pop', conteo: 10 },
    ];

    service.obtenerConteoGeneros().subscribe(result => {
      expect(result).toEqual(expectedCount);
    });

    const req = httpTestingController.expectOne('/conteo');
    expect(req.request.method).toBe('GET');
    req.flush(expectedCount);
  });
});
