import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = {
  container: document.querySelector('.gallery'),
};

// --------------creating tags------------
const arrayImgTag = galleryItems.map ( ({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}"" alt="${description}" />
            </a>
          </li>`;
});

gallery.container.insertAdjacentHTML("beforeend", arrayImgTag.join(''));


// -------------connecting a lightbox from the SimpleLightbox library-------

let galleryContainer = new SimpleLightbox('.gallery a', {
  close: false, 
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'text__label',
});
console.log(galleryItems);
