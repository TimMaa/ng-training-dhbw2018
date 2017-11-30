import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, HttpHandler, HttpClient]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return Observable', inject([ApiService], (service: ApiService) => {
    service.getFact().subscribe(value => {
      expect(value).toBe('observable value');
    });
  }));
});
