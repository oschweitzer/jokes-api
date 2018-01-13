import {Controller, Get} from '@nestjs/common';
import {DadJokeService} from "../../services/dad-joke/dad-joke.service";

@Controller('dad-jokes')
export class DadJokeController {
    constructor(private dadJokeService: DadJokeService) {}

  @Get()
  async getJoke() {
    let joke = null;
    try {
      joke = await this.dadJokeService.getJoke('https://icanhazdadjoke.com/');
    }
    catch (err) {
      console.log(err);
    }

    return joke;
  }
}
