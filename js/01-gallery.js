import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryItemMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
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
    }).join('');
};

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const parentLink = event.target.closest('.gallery__link');
    if (!parentLink) {
        return;
    }
    const hrefImageOriginal = parentLink.getAttribute('href');

    const instance = basicLightbox.create(`
    <img src="${hrefImageOriginal}">
    `);
    instance.show();
    
    const closeWithKey = (event => {
      if (event.code === 'Escape') {
          instance.close();
          window.removeEventListener('keydown', closeWithKey );
      }
  })
  window.addEventListener('keydown', closeWithKey );
}

gallery.addEventListener("click", onGalleryClick)