// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
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

// function showImg(event) {
//   event.preventDefault();

//   if (event.target.nodeName != 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}">'`
//   );

//   instance.show();
//   window.addEventListener('keydown', instanceCloseByEscape);
//   function instanceCloseByEscape(event) {
//     if (event.code === 'Escape') {
//       instance.close();
//       window.removeEventListener('keydown', instanceCloseByEscape);
//     }
//   }
// }
function stopDefaultAction(event) {
  event.preventDefault();

  if (event.target.nodeName != 'IMG') {
    return;
  }
}

let lightbox = new SimpleLightbox('.gallery a');
