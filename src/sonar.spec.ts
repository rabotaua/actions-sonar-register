import nock from "nock";
import { SonarCloudClient, SONAR_URL, SonarSearchResponse, SonarBranchesListResponse } from "./sonar";

describe("SonarCloudClient", () => {
  describe("register", () => {
    const project = "rabotaua_demo";
    const repo = "demo";
    const org = "rua";
    const sonar = new SonarCloudClient(org, "123");
    const projects: SonarSearchResponse = { components: [] };
    const branches: SonarBranchesListResponse = { branches: [{ name: "master", isMain: true }] };

    const mock = (projects: SonarSearchResponse, branches: SonarBranchesListResponse, branch: string) => {
      nock(SONAR_URL).get(`/api/projects/search?organization=${org}&q=${repo}`).reply(200, projects);
      if (projects.components.length === 0) {
        nock(SONAR_URL).post(`/api/projects/create`, { name: repo, organization: org, project }).reply(200);
      }
      nock(SONAR_URL).get(`/api/project_branches/list?project=${project}`).reply(200, branches);
      if (branches.branches.length > 1) {
        nock(SONAR_URL).post(`/api/project_branches/delete`, { branch, project }).reply(200);
      }
      nock(SONAR_URL).post(`/api/project_branches/rename?name=${branch}&project=${project}`).reply(200);
    };

    it("should register new project with master branch", async () => {
      const branch = "master";
      mock(projects, branches, branch);
      await sonar.register("rabotaua", repo, branch);
    });

    it("should register new project with main branch", async () => {
      const branch = "main";
      mock(projects, branches, branch);
      await sonar.register("rabotaua", repo, branch);
    });

    it("should swap primary branch for registered project", async () => {
      const branch = "main";
      const projects: SonarSearchResponse = { components: [{ name: repo, key: project }] };
      const branches: SonarBranchesListResponse = {
        branches: [
          { name: "master", isMain: true },
          { name: "main", isMain: false },
        ],
      };
      mock(projects, branches, branch);
      await sonar.register("rabotaua", repo, branch);
    });
  });
});
