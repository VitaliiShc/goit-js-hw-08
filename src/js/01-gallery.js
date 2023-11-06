// Add imports above this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const imgGallery = document.querySelector('ul.gallery');

createMurkup(galleryItems);

function createMurkup(arrObj) {
  const markup = arrObj
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
  return (imgGallery.innerHTML = markup);
}

const lightbox = new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});
