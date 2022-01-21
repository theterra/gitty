class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(path, options) {
    const res = await fetch(`${this.baseUrl}${path}`, options);
    const data = await res.json();
    return data;
  }
}

export default ApiClient