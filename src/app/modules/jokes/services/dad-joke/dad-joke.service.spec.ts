import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {DadJokeService} from './dad-joke.service';
import {expect} from 'chai';

describe('DadJokeService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        DadJokeService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: DadJokeService;
  beforeEach(() => {
    service = module.get(DadJokeService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
