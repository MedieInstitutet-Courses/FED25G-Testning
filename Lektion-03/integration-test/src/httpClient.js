export default class HttpClient {
  async fetchData(url = 'https://jsonplaceholder.typicode.com/posts/1') {
    const response = await fetch(url);
    return await response.json();
  }
}
