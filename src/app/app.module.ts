import {Module} from '@nestjs/common';
import {JokesModule} from "./modules/jokes/jokes.module";
import {VersionModule} from "./modules/version/version.module";

@Module({
  modules: [
      JokesModule,
      VersionModule
  ]
})
export class ApplicationModule {}