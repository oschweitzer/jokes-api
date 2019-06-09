import {Injectable} from '@nestjs/common';
import {AxiosRequestConfig} from 'axios';
import * as axios from 'axios';

@Injectable()
export abstract class JokeService {

  async getJoke(url:string){
    const options: AxiosRequestConfig = {
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
