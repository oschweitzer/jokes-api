import {Controller, Get, HttpStatus} from '@nestjs/common';
import {DadJokeService} from "../../services/dad-joke/dad-joke.service";
import {HttpException} from "@nestjs/core";
import * as woodcutter from 'woodcutter';

@Controller('dad-jokes')
export class DadJokeController {
  private logger;
    constructor(private dadJokeService: DadJokeService) {
      this.logger = new woodcutter.WoodCutter();
    }

  @Get()
  async getJoke() {
    let joke = null;
    try {
      joke = await this.dadJokeService.getJoke('https://icanhzeazeazeazdadjoke.com/');
    }
    catch (err) {
      this.logger.error(err.message, err);
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return joke;
  }
}
