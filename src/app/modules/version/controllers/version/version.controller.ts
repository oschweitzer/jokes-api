import {Controller, Get, HttpStatus} from '@nestjs/common';
import * as git from 'nodegit';
import {HttpException} from "@nestjs/core";

@Controller('version')
export class VersionController {
  constructor() {}

  @Get()
  async getVersion() {
    let commit = null;
    try {
      const repo = await git.Repository.open(process.cwd());
      const headCommit = await repo.getHeadCommit();
      commit = await headCommit.sha();
      console.log(`HEAD commit sha : ${commit}`);
    }
    catch (err) {
      console.log(err);
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return commit;
  }
}
