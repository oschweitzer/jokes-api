import {Component} from '@nestjs/common';
import * as axios from 'axios';

@Component()
export abstract class JokeService {

  async getJoke(url:string){
    const options = {
      url : url,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "content-type": "application/json"
      }
    };
    const joke = await axios.default.request(options);
    return joke.data;
  }
}
