import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

const divGalleryRef = document.querySelector('.gallery');
divGalleryRef.insertAdjacentHTML('afterbegin', createGallery());

const imagesMarkup = createGallery(galleryItems);
function createGallery(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

window.addEventListener('keydown', onEscPres);

function onEscPres(evt) {
  if (evt.key !== 'Escape') {
    return;
  }
}
