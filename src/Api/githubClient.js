import ApiClient from "./client";

class GithubClient extends ApiClient {
  getUserById(userId) {
    return this.request(`/users/${userId}`);
  }

  getUserRepos(userId) {
      return this.request(`/users/${userId}/repos`)
  }
}

export default GithubClient;
