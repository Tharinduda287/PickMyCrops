import { TestBed, inject } from '@angular/core/testing';

import { Api.ServiseService } from './api.servise.service';

describe('Api.ServiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Api.ServiseService]
    });
  });

  it('should be created', inject([Api.ServiseService], (service: Api.ServiseService) => {
    expect(service).toBeTruthy();
  }));
});
