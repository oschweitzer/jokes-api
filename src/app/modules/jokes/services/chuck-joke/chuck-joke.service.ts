import {Component} from '@nestjs/common';
import {JokeService} from "../joke-service";

@Component()
export class ChuckJokeService extends JokeService {
    constructor() {
      super();
    }
}
