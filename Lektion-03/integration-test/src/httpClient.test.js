import { it, describe, expect, vi, afterEach, test } from 'vitest';
import HttpClient from './httpClient';

afterEach(() => {
  vi.clearAllMocks();
});

describe('HttpClient fetch function', () => {
  it('should return one post', async () => {
    // Steg 1. Definiera resultat vi ska mocka
    const mockResponse = {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    };

    // Steg. Sätt upp vi mockhantering av fetch...
    global.fetch = vi.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      });
    });

    const http = new HttpClient();
    const data = await http.fetchData();

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
  });
});
