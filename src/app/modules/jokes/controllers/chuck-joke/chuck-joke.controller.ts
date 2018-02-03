import {Controller, Get, HttpStatus} from '@nestjs/common';
import {ChuckJokeService} from "../../services/chuck-joke/chuck-joke.service";
import {HttpException} from "@nestjs/core";
import * as woodcutter from 'woodcutter';
import {environment} from "../../../../../environments/environment";

@Controller('chuck-jokes')
export class ChuckJokeController {
  private logger;

  constructor(private chuckJokeService: ChuckJokeService) {
    this.logger = new woodcutter.WoodCutter();
  }

  @Get()
  async getJoke() {
    let joke = null;
    try {
      joke = await this.chuckJokeService.getJoke(environment.chuckNorrisJokesApi);
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
