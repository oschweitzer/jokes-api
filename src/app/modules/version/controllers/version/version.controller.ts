import {Controller, Get} from '@nestjs/common';
import * as git from 'nodegit';

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
    }

    return commit;
  }
}
