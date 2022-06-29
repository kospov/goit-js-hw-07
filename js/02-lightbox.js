import { galleryItems } from './gallery-items.js';
// Change code below this line

const listItemsEl = document.querySelector('.gallery');

console.log(galleryItems);

listItemsEl.insertAdjacentHTML('afterbegin', createGallaryItem(galleryItems));

function createGallaryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`}).join("");
};

let lightbox = new SimpleLightbox('.gallery a', {
  
        captions: true,
        captionType: 'text',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,      
  })