const BASE_URL = 'https://pixabay.com/api/';
export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    q: searchedQuery,
    key: '45557561-052ca280d13484c0c5f536db7',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
