import axios, { AxiosInstance, AxiosError } from "axios";

export const SONAR_URL = "https://sonarcloud.io";

export interface SonarSearchResponse {
  /*
  paging: {
    pageIndex: number;
    pageSize: number;
    total: number;
  };
  */
  components: {
    key: string;
    name: string;
    /*
    organization: string;
    qualifier: string;
    visibility: string;
    lastAnalysisDate: string;
    revision: string;
    */
  }[];
}

export interface SonarBranchesListResponse {
  branches: {
    name: string;
    isMain: boolean;
    /*
    type: string;
    status: {
      qualityGateStatus: string;
    };
    analysisDate: string;
    commit: {
      sha: string;
      author: {
        name: string;
        login: string;
        avatar: string;
      };
      date: string;
      message: string;
    };
    */
  }[];
}

export interface SonarErrorResponse {
  errors: { msg: string }[];
}

export class SonarCloudClient {
  private axios: AxiosInstance;

  public constructor(private org: string, private token: string) {
    this.axios = axios.create({
      baseURL: SONAR_URL,
      timeout: 5000,
      auth: { username: this.token, password: "" },
    });
  }

  public async register(githubOrganization: string, repositoryName: string, mainBranchName: string): Promise<void> {
    const project = `${githubOrganization}_${repositoryName}`;
    try {
      console.log(`going to search "${repositoryName}" in projects`);
      const { components } = await this.searchProjects(this.org, repositoryName);
      console.log(`received ${components.length} results`);
      const found = components.find(({ key, name }) => key === project && name === repositoryName);
      if (!found) {
        console.log(`project not found, going to register`);
        await this.createProject(repositoryName, project, this.org);
        console.log(`project successfully registered`);
      }
      console.log("retrieving branches");
      const { branches } = await this.getBranches(project);
      console.log(`retrieved ${branches.length} branches`);
      if (branches.find(({ name, isMain }) => name === mainBranchName && isMain === false)) {
        console.log("deleting branch");
        await this.deleteBranch(project, mainBranchName);
        console.log("deleted branch");
      }
      console.log("renaming branch");
      await this.renameBranch(project, mainBranchName);
      console.log("renamed branch");
    } catch (error: Error | AxiosError | any) {
      SonarCloudClient.handle(error);
    }
  }

  private async searchProjects(organization: string, q: string): Promise<SonarSearchResponse> {
    const { data } = await this.axios.get<SonarSearchResponse>("/api/projects/search", { params: { organization, q } });
    return data;
  }

  private async createProject(name: string, project: string, organization: string): Promise<void> {
    await this.axios.post("/api/projects/create", { name, project, organization });
  }

  private async getBranches(project: string): Promise<SonarBranchesListResponse> {
    const { data } = await this.axios.get<SonarBranchesListResponse>("/api/project_branches/list", { params: { project } });
    return data;
  }

  private async deleteBranch(project: string, branch: string): Promise<void> {
    await this.axios.post("/api/project_branches/delete", { project, branch });
  }

  private async renameBranch(project: string, name: string): Promise<void> {
    await this.axios.post("/api/project_branches/rename", null, { params: { project, name } });
  }

  private static handle(error: Error | AxiosError | any) {
    if (axios.isAxiosError(error)) {
      const message = (error.response?.data as SonarErrorResponse)?.errors?.map((error) => error?.msg)?.shift();
      throw new Error(message || error?.message);
    } else {
      throw error;
    }
  }
}
