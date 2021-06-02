  // OPEN MENU

function openNav() {
    document.querySelector(".slide-menu").style.width = "250px";
  }
  function closeNav() {
    document.querySelector(".slide-menu").style.width = "0";
  }

  // SCALE PHOTO

  const img1 = document.querySelector('#gallery-img1');
  const img2 = document.querySelector('#gallery-img2');
  const img3 = document.querySelector('#gallery-img3');
  const img4 = document.querySelector('#gallery-img4');
  const img5 = document.querySelector('#gallery-img5');
  
  img1.addEventListener('click', () => openLightbox('images/blog/photo-7.jpeg'));
  img2.addEventListener('click', () => openLightbox('images/blog/photo-1.jpeg'));
  img3.addEventListener('click', () => openLightbox('images/blog/photo-6.jpeg'));
  img4.addEventListener('click', () => openLightbox('images/blog/photo-4.jpeg'));
  img5.addEventListener('click', () => openLightbox('images/blog/photo-2.jpeg'));

  var imagesGallery = [img1, img2, img3, img4, img5];

  function openLightbox(imgSource){
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('#lightbox-image');
    lightbox.classList.add('lightbox-visible');
    lightboxImage.src = imgSource;
  }

  // VIDEO SRIPT

 