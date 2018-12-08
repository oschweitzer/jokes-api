import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
import * as woodcutter from 'woodcutter';
import * as cors from 'cors';
import {ValidationPipe} from "@nestjs/common";
import {environment} from './environments/environment';

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule);
app.then(instance => {
      const logger = new woodcutter.WoodCutter();
      instance.enableCors();
      instance.listen(environment.port, () =>
          logger.info(`Application is listening on port ${environment.port}`)
      )
    }
);
