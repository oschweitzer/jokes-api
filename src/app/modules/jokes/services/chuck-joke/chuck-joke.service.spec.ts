import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {ChuckJokeService} from './chuck-joke.service';
import {expect} from 'chai';

describe('ChuckJokeService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        ChuckJokeService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: ChuckJokeService;
  beforeEach(() => {
    service = module.get(ChuckJokeService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
