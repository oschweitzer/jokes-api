import {Controller, Get, HttpStatus} from '@nestjs/common';
import * as git from 'nodegit';
import {HttpException} from "@nestjs/core";
import * as woodcutter from 'woodcutter';

@Controller('version')
export class VersionController {

  private logger;

  constructor() {
    this.logger = new woodcutter.WoodCutter();
  }

  @Get()
  async getVersion() {
    let commit = null;
    try {
      const repo = await git.Repository.open(process.cwd());
      const headCommit = await repo.getHeadCommit();
      commit = await headCommit.sha();
      this.logger.info(`HEAD commit SHA-1 : ${commit}`);
    }
    catch (err) {
      this.logger.error(err.message, err);
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return commit;
  }
}
