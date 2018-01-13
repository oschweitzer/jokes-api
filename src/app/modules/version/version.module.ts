import {Module} from '@nestjs/common';
import {VersionController} from './controllers/version/version.controller';

@Module({
  controllers: [
    VersionController
  ]
})
export class VersionModule {}
