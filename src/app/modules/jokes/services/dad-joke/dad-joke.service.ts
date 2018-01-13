import {Component} from '@nestjs/common';
import {JokeService} from "../joke-service";

@Component()
export class DadJokeService extends JokeService {
    constructor() {
      super();
    }
}
