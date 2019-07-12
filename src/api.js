export function searchGiphy(searchTerm) {
  const apiKey = 'vTIpYBc3I5jgBnqWKy1SMccAAXfpSRvy';
  return fetch(`https://api.giphy.com/v1/gifs/search?&api_key=${apiKey}&q=${searchTerm}&limit=50`)
      .then(resp => resp.json());
}
