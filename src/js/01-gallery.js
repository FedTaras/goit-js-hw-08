// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const divGalleryRef = document.querySelector('.gallery');
divGalleryRef.insertAdjacentHTML('afterbegin', createGallery());

const imagesMarkup = createGallery(galleryItems);
function createGallery(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
        <img
          src="${preview}"
          class="gallery__image"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

// console.log(document.querySelectorAll(".gallery__image"));
divGalleryRef.addEventListener('click', onDivGalleryClick);

function onDivGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  console.log(evt.target.dataset.source);

  basicLightbox
    .create(
      `
    <img width="1400" height="900" src="${evt.target.dataset.source}">
`
    )
    .show();
}
