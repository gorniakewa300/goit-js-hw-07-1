import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = {
  container: document.querySelector('.gallery'),
};

// ------------creating tags---------

const arrayImgTag = galleryItems.map ( ({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>`
});

gallery.container.insertAdjacentHTML("beforeend", arrayImgTag.join(''));


// -----------connecting a lightbox from the basicLightbox library-------------

let instance = '';

const onImgClick = (event) => {
  const target = event.target;

  event.preventDefault();
  if (target.nodeName !== "IMG"){
    return;
  };
  instance = basicLightbox.create(`<img src="${target.dataset.source}" >`,
   {onShow: () => {window.addEventListener('keydown', onEscClick);},
   onClose: () => {window.removeEventListener('keydown', onEscClick);}
  }
   );
  instance.show();
};

const onEscClick = (event) => {
  if (event.code === 'Escape') {
    window.removeEventListener('keydown', onEscClick);
    instance.close();
  };
};

gallery.container.addEventListener('click', onImgClick);
console.log(galleryItems);
