import { TestBed } from '@angular/core/testing';

import { AddObjetosService } from './add-objetos.service';

describe('AddObjetosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddObjetosService = TestBed.get(AddObjetosService);
    expect(service).toBeTruthy();
  });
});
