// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
let galleryContainer = document.querySelector(".gallery");

function CreateItemFromTemplate(galleryItem) {
    return `
            <li class="gallery__item">
                <a class="gallery__link" href=${ galleryItem.original }>
                <img
                    class="gallery__image"
                    src=${ galleryItem.preview }
                    data-source=${ galleryItem.original }
                    alt=${ galleryItem.description }
                />
                </a>
            </li>
        `
}


let galleryMarkup = galleryItems.map(CreateItemFromTemplate).join("");
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup)

const lightbox = new SimpleLightbox(`.gallery a`,
    {

    });
console.log(galleryItems);