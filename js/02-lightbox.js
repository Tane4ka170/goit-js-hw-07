import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryItemMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    }).join('');
};

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 })