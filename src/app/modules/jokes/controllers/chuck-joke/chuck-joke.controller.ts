import {Controller, Get} from '@nestjs/common';
import {ChuckJokeService} from "../../services/chuck-joke/chuck-joke.service";

@Controller('chuck-jokes')
export class ChuckJokeController {
    constructor(private chuckJokeService: ChuckJokeService) {}

  @Get()
  async getJoke() {
    let joke = null;
    try {
      joke = await this.chuckJokeService.getJoke('https://api.chucknorris.io/jokes/random');
    }
    catch (err) {
      console.log(err);
    }

    return joke;
  }
}
