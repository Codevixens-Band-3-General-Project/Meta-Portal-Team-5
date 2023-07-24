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


