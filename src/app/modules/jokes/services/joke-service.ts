import {Component} from '@nestjs/common';
import * as pRequest from "request-promise-native";

@Component()
export abstract class JokeService {

  async getJoke(url:string){
    const options = {
      uri : url,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };
    const joke = await pRequest(options);
    return joke;

  }
}
