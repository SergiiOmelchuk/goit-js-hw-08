import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const refs = {
  galleryEl: document.querySelector('.gallery'),
};

const galleryMarkup = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join('');

refs.galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);
refs.galleryEl.addEventListener('click', stopDefaultAction);

function stopDefaultAction(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

let lightbox = new SimpleLightbox('.gallery a');
