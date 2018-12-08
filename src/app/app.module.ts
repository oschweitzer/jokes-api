import {Module} from '@nestjs/common';
import {JokesModule} from "./modules/jokes/jokes.module";

@Module({
  modules: [
      JokesModule,
  ]
})
export class ApplicationModule {}