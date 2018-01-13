import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {DadJokeController} from './dad-joke.controller';
import {expect} from 'chai';

describe('DadJokeController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        DadJokeController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: DadJokeController;
  beforeEach(() => {
    controller = module.get(DadJokeController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
