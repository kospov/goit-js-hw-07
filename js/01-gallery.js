import { galleryItems } from './gallery-items.js';
// Change code below this line

const listItemsEl = document.querySelector('.gallery');
// const itemsEl = document.querySelector('.gallery__item');
// const linkItemsEl = document.querySelector('.gallery__link');
// const imageItemsEl = document.querySelector('.gallery__image');

listItemsEl.insertAdjacentHTML('beforeend', createGallaryItem(galleryItems));

listItemsEl.addEventListener('click', onGallatyLinkClick);

function createGallaryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original}
            <img class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
        />
    </a>
</div>`})
        .join("");
}

function onGallatyLinkClick(e) {
     if (e.target.nodeName !== 'A') {
    return;
  }
    e.preventDefault();

    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);


    const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">`);

    instance.show();
}


console.log(galleryItems);
