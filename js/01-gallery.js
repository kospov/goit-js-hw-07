import { galleryItems } from './gallery-items.js';
// Change code below this line
let instance;

const listItemsEl = document.querySelector('.gallery');

console.log(galleryItems);

listItemsEl.insertAdjacentHTML('afterbegin', createGallaryItem(galleryItems));

listItemsEl.addEventListener('click', onGallatyLinkClick);

document.addEventListener('keydown', onEscapeBtnClick);

function createGallaryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`}).join("");
};

function onGallatyLinkClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  };

  e.preventDefault();

  openModal(e);

  console.dir(e.target.dataset.source);
}

function onEscapeBtnClick(e) {
  if (e.key !== 'Escape') {
    return;
  };
  closeModal();

}

function openModal(e) {
  instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`);
  
  instance.show();

  document.addEventListener('keydown', onEscapeBtnClick);  
}
  
function closeModal() {
  instance.close();
  
  document.removeEventListener('keydown', onEscapeBtnClick);  
}



