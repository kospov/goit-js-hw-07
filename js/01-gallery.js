import { galleryItems } from './gallery-items.js';
// Change code below this line
let lightbox;

const listItemsEl = document.querySelector('.gallery');

console.log(galleryItems);

listItemsEl.insertAdjacentHTML('afterbegin', createGallaryItem(galleryItems));

listItemsEl.addEventListener('click', onGallatyLinkClick);

document.addEventListener('keydown', onEscapeBtnClick);

function createGallaryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`}).join("");
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
  lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  
  lightbox.open();

  document.addEventListener('keydown', onEscapeBtnClick);  
}
  
// function closeModal() {
//   lightbox.close();
  
//   document.removeEventListener('keydown', onEscapeBtnClick);  
// }