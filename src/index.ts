import * as core from "@actions/core";
import * as github from "@actions/github";
import { SonarCloudClient } from "./sonar";

try {
  const token = core.getInput("token");
  const org = core.getInput("org");
  const client = new SonarCloudClient(github.context.repo.owner, core.getInput("token"))
  // client.register(core.getInput("org"), github.context.repo.repo, xx);
  console.log({token, org, client});
  console.log(JSON.stringify(github.context, null, 4));
} catch (error) {
  core.setFailed((error as Error).message);
}
