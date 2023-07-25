
// const galleryContainer =document.querySelector('.gallery-container');
// const galleryControlsContainer =document.querySelector('.gallery-controls');
// const galleryControls = ['previous', 'next'];
// const galleryItems = document.querySelector('gallery-item');

// class Carousel {

//     constructor(container, items, controls){
//     this.carouselContainer = container;
//     this.carouselControls = controls;
//     this.carouselArray = [...items];
//     }

//     updateGallery (){
//         this.carouselArray.forEach(el =>{
//             el.classList.remove('gallery-item-1');
//             el.classList.remove('gallery-item-2');
//             el.classList.remove('gallery-item-3');
//             el.classList.remove('gallery-item-4');
//             el.classList.remove('gallery-item-5');
//         });
//         this. carouselArray.slice(0, 5).forEach((el , 1) => {
//             el.classList.add(`gallery-item-$(i+1)`);
//         });
//     }
//     setCurrentState (direction){
//         if(direction.className = 'gallery-controls-previous'){
//             this.carouselArray.unshift(this.carouselArray.pop());
//         }else{
//             this.carouselArray.push(this.carouselArray.shift());
//         }this.updateGallery();
//     }
//     setControls(){
//         this.carouselControls.forEach(controls => {
//             galleryControlsContainer.appendChild(
//                 document.createElement('button')
//             ).className=`gallery-controls-${controls}`;
//             document.querySelector(`.gallery-controls-${control}`).innerText = controls;
//         });
//     }
//     useControls(){
//         const triggers=[...galleryControlsContainer.childNodes]
//         triggers.forEach(control => {
//             control.addEventListener('click', e =>{
//                 e.preventDefault();
//                 this.setCurrentState(control);
//             });
//         });
//     }

// }

// const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// exampleCarousel.setControls();
// exampleCarousel.useControls();






const metaImages = document.querySelector(".meta-images");
const slides = document.querySelectorAll(".meta-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;
const slideMargin = parseInt(getComputedStyle(slides[0]).marginRight);

const autoSlideInterval = 3000;

function setActiveSlide() {
    slides.forEach(slide => {
       slide.classList.remove("active-slide");
    });

    slides[currentIndex].classList.add("active-slide");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    if (currentIndex === 0) {
        metaImages.appendChild(slides[0]);
        metaImages.style.transform = `translateX(0)`;
    } else {
    metaImages.style.transform = `translateX(-${(slideWidth + slideMargin) * currentIndex}px)`;
    }
    setActiveSlide();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    metaImages.style.transform = `translateX(-${(slideWidth + slideMargin) * currentIndex}px)`;
    setActiveSlide();
}

function startAutoSlide() {
    setInterval(nextSlide, autoSlideInterval);
}

prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);

startAutoSlide();

setActiveSlide();


