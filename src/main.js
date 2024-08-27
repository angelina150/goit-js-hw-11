import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

const searchForm = document.querySelector('.js-search-form');
const userList = document.querySelector('.user-list');
const loader = document.querySelector('.loader');

const galleryLightbox = new SimpleLightbox('.user-list a', {});
function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}

const onSearchFormSubmit = event => {
  userList.innerHTML = '';
  event.preventDefault();
  showLoader();
  const searchedValue = searchForm.elements.user_query.value;
  fetchPhotos(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        userList.innerHTML = '';
        searchForm.reset();
        return;
      }
      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');
      userList.innerHTML = galleryCardsTemplate;
      galleryLightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there was a problem with your request. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
};
searchForm.addEventListener('submit', onSearchFormSubmit);
