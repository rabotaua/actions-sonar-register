import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const token = core.getInput("token");
  console.log(`token ${token.length}`);
  console.log(JSON.stringify(github.context, null, 4));
} catch (error) {
  core.setFailed((error as Error).message);
}
