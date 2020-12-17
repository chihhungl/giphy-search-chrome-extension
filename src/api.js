import { API_KEY } from './secret';

const BASE_URL = 'https://api.giphy.com/v1/gifs';

export function searchGiphy(searchTerm) {
  return fetch(`${BASE_URL}/search?&api_key=${API_KEY}&q=${searchTerm}&limit=50`)
      .then(resp => resp.json());
}
