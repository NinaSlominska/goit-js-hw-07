import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const markupArray = galleryItems.map(({ preview, original, description }) =>
{
   
   return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
       src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`})

const markup = markupArray.join('')

gallery.insertAdjacentHTML("beforeend", markup)
gallery.addEventListener('click', galleryClick)

function galleryClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`)  
    instance.show()

}






