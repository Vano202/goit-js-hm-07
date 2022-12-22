import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const imgGallery= imgCard(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, imgGallery);

gallery.addEventListener('click', onImageCardClick);

function imgCard(galleryItems) {
    return galleryItems

    .map(({ original, preview, description }) => {
       return `
       <div class="gallery__item">
       <a class="gallery__link" href="large-image.jpg">
        <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
        />
        </a>
        </div>`;
    })
        .join("");
}

function onImageCardClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show();

    const onKeydownEscape = event => {
        console.log(event.code);
        if (event.code === 'Escape'){
            instance.close();
        }
    };
    window.addEventListener('keydown', onKeydownEscape);
};

