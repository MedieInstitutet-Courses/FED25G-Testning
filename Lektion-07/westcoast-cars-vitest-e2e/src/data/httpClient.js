export default class HttpClient {
  #baseUrl = 'http://localhost:3000';

  constructor(resource) {
    this.#baseUrl = `${this.#baseUrl}/${resource}`;
  }

  async listAllVehicles() {
    return await this.#getData(this.#baseUrl);
  }

  async findVehicle(id) {
    return await this.#getData(`${this.#baseUrl}/${id}`);
  }

  async addVehicle(vehicle) {
    try {
      const response = await fetch(this.#baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(vehicle),
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async #getData(url) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        return { status: 200, data };
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw error;
    }
  }
}
