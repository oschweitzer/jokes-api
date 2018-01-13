import {Module} from '@nestjs/common';
import {ChuckJokeController} from './controllers/chuck-joke/chuck-joke.controller';
import {DadJokeController} from "./controllers/dad-joke/dad-joke.controller";
import {ChuckJokeService} from "./services/chuck-joke/chuck-joke.service";
import {DadJokeService} from "./services/dad-joke/dad-joke.service";

@Module({
  controllers: [
    ChuckJokeController,
    DadJokeController
  ],
  components: [
    ChuckJokeService,
    DadJokeService
  ]
})
export class JokesModule {}
