import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {VersionController} from './version.controller';
import {expect} from 'chai';

describe('VersionController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        VersionController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: VersionController;
  beforeEach(() => {
    controller = module.get(VersionController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
