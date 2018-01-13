import {Controller, Get, HttpStatus} from '@nestjs/common';
import {ChuckJokeService} from "../../services/chuck-joke/chuck-joke.service";
import {HttpException} from "@nestjs/core";

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
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return joke;
  }
}
