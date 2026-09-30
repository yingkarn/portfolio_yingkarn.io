```javascript
const items = document.querySelectorAll(".portfolio-item");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

const closeButton = document.querySelector(".close");
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const counter = document.querySelector(".counter");


/* เก็บชื่อรูปทั้ง 12 รูป */

const images = [
    "portfolio01.jpg",
    "portfolio02.jpg",
    "portfolio03.jpg",
    "portfolio04.jpg",
    "portfolio05.jpg",
    "portfolio06.jpg",
    "portfolio07.jpg",
    "portfolio08.jpg",
    "portfolio09.jpg",
    "portfolio10.jpg",
    "portfolio11.jpg",
    "portfolio12.jpg"
];


let currentIndex = 0;


/* ================= OPEN ================= */

function openLightbox(index) {

    currentIndex = index;

    lightboxImage.src =
        images[currentIndex];

    counter.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / 12`;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


items.forEach((item, index) => {

    item.addEventListener("click", () => {

        openLightbox(index);

    });

});


/* ================= NEXT ================= */

function showNext() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src =
        images[currentIndex];

    counter.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / 12`;
}


nextButton.addEventListener(
    "click",
    showNext
);


/* ================= PREVIOUS ================= */

function showPrevious() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src =
        images[currentIndex];

    counter.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / 12`;
}


previousButton.addEventListener(
    "click",
    showPrevious
);


/* ================= CLOSE ================= */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


closeButton.addEventListener(
    "click",
    closeLightbox
);


/* ================= CLICK OUTSIDE ================= */

lightbox.addEventListener(
    "click",
    function(event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    }
);


/* ================= KEYBOARD ================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "ArrowRight") {
            showNext();
        }

        if (event.key === "ArrowLeft") {
            showPrevious();
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

    }
);
```
