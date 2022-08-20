import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/common.css";
import "../css/01-gallery.css";

const onGalleryContainer = document.querySelector('.gallery');
const onItemsGallery = createItemsGallery(galleryItems);

onGalleryContainer.insertAdjacentHTML('beforeend', onItemsGallery);

function createItemsGallery(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
                </a>
                </li>
        `
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionType: "alt",
    captionDelay: 250,
});





