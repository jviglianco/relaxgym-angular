import { TestBed } from '@angular/core/testing';

import { UsuarioResolver } from './usuario.resolver';

describe('UsuarioResolverResolver', () => {
  let resolver: UsuarioResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UsuarioResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
