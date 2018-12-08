import {Injectable} from '@nestjs/common';
import {JokeService} from '../joke-service';

@Injectable()
export class ChuckJokeService extends JokeService {
    constructor() {
      super();
    }
}
