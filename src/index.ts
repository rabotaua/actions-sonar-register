import * as core from "@actions/core";
import * as github from "@actions/github";
import { SONAR_URL, SonarCloudClient } from "./sonar";

const run = async () => {
  const token = core.getInput("token");
  const org = core.getInput("org");

  const githubOrganization = github.context.payload.repository?.owner.login;
  const repositoryName = github.context.payload.repository?.name;
  const mainBranchName = github.context.payload.repository?.default_branch;

  if (!githubOrganization || !repositoryName) {
    core.debug(JSON.stringify(github.context.payload, null, 2));
    throw new Error("Unable to retrieve organization name and/or repository names");
  }

  const client = new SonarCloudClient(org, token);
  await client.register(githubOrganization, repositoryName, mainBranchName);

  core.info(`${SONAR_URL}/project/overview?id=${githubOrganization}_${repositoryName}`);
};

run().catch((error) => core.setFailed((error as Error).message));
