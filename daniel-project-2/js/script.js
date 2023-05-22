var typed = new Typed(".input", {
    strings: ["Daniel Azevedo.", "Fotógrafo.", "Retratista."],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
  });

  const photoURLs = [
    './catalog/p2.jpg', './catalog/p3.jpg', './catalog/p4.jpg', './catalog/p5.jpg', './catalog/p6.jpg', './catalog/p7.jpg', './catalog/p8.jpg', './catalog/p9.jpg', './catalog/p10.jpg', './catalog/p11.jpg'
  ];

  const photoGrid = document.querySelector('.photo-grid');

  photoURLs.forEach((url) => {
    const photo = document.createElement('div');
    photo.className = 'photo';
    photo.style.backgroundImage = `url(${url})`;
    photoGrid.appendChild(photo);
  });

let hamburger = document.querySelector(".hamb");
let navlist = document.querySelector(".nav-list");
let links = document.querySelector(".nav-list li");
let home = document.querySelector(".home")

function openModal(){
  navlist.classList.add("active");
};

function closeModal(){
  navlist.classList.remove("active");
};

hamburger.addEventListener("click", openModal);

home.addEventListener("click", closeModal);