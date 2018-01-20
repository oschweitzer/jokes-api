import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
import * as woodcutter from 'woodcutter';

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule);
app.then(instance => {
  const logger = new woodcutter.WoodCutter();
      instance.listen(3000, () =>
         logger.info('Application is listening on port 3000')
      )
    }
);
