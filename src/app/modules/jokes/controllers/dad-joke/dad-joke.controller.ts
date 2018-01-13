import {Controller, Get, HttpStatus} from '@nestjs/common';
import {DadJokeService} from "../../services/dad-joke/dad-joke.service";
import {HttpException} from "@nestjs/core";

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
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return joke;
  }
}
