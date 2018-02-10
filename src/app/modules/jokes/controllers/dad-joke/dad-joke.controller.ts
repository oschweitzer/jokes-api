import {Controller, Get, HttpStatus} from '@nestjs/common';
import {DadJokeService} from "../../services/dad-joke/dad-joke.service";
import {HttpException} from "@nestjs/core";
import * as woodcutter from 'woodcutter';
import {environment} from "../../../../../environments/environment";
import {ApiResponse} from "../../../responses/models/api-response.model";

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
      joke = await this.dadJokeService.getJoke(environment.dadJokesApi);
      this.logger.debug('', joke);
    }
    catch (err) {
      this.logger.error(err.message, err);
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ApiResponse(joke, "Successfully get the joke");
  }
}
