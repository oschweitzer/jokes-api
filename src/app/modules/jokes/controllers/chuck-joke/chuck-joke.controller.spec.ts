import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {ChuckJokeController} from './chuck-joke.controller';
import {expect} from 'chai';

describe('ChuckJokeController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        ChuckJokeController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: ChuckJokeController;
  beforeEach(() => {
    controller = module.get(ChuckJokeController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
