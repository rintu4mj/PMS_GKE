import axios from "axios";

class ProjectServices {
  saveProject(project) {
    return axios.post("/projects/", project);
  }

  getProjects() {
    return axios.get("/projects/");
  }

  getTotalCompletedProjects() {
    return axios.get("/projects/totalCompleted");
  }

  getTotalInProgressProjects() {
    return axios.get("/projects/totalInProgress");
  }

  // deleteProject(id) {
  //   return axios.delete(PROJECT_API_BASE_URL + "/" + id);
  // }

  // getProjectById(id) {
  //   return axios.get(PROJECT_API_BASE_URL + "/" + id);
  // }

  // updateProject(project, id) {
  //   return axios.put(PROJECT_API_BASE_URL + "/" + id, project);
  // }

  saveProjectHistory(project) {

    return axios.post("/projects/saveProjectHistory", project);
  }

  getProjectHistory() {

    return axios.get("/projects/getProjectHistory");
  }
}

export default new ProjectServices();
