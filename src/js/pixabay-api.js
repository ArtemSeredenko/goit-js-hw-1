const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36191554-a4c97c0aee7312389854400e2';

function getData(str) {
  const parameters = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 32,
  });

  return fetch(`${BASE_URL}?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
export { getData };
