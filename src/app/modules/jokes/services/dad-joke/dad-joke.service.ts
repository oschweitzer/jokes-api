import {Injectable} from '@nestjs/common';
import {JokeService} from '../joke-service';

@Injectable()
export class DadJokeService extends JokeService {
    constructor() {
      super();
    }
}
