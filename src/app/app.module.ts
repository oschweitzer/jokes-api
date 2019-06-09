import {Module} from '@nestjs/common';
import {JokesModule} from './modules/jokes/jokes.module';

@Module({
  imports: [
      JokesModule
  ]
})
export class ApplicationModule {}
