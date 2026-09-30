/* =====================================================
   PORTFOLIO WEBSITE
   YINGKARN — EARLY CHILDHOOD EDUCATION
   ===================================================== */


/* ================= PORTFOLIO DATA ================= */

const portfolioPages = [
    "images/portfolio01.jpg",
    "images/portfolio02.jpg",
    "images/portfolio03.jpg",
    "images/portfolio04.jpg",
    "images/portfolio05.jpg",
    "images/portfolio06.jpg",
    "images/portfolio07.jpg",
    "images/portfolio08.jpg",
    "images/portfolio09.jpg",
    "images/portfolio10.jpg",
    "images/portfolio11.jpg",
    "images/portfolio12.jpg"
];

let currentPortfolio = 1;


/* ================= OPEN PORTFOLIO ================= */

function openPortfolio(page) {

    currentPortfolio = page;

    const modal = document.getElementById("portfolioModal");
    const modalImage = document.getElementById("modalImage");
    const modalNumber = document.getElementById("modalNumber");

    if (!modal || !modalImage || !modalNumber) {
        return;
    }

    modalImage.src = portfolioPages[currentPortfolio - 1];

    modalNumber.textContent =
        String(currentPortfolio).padStart(2, "0");

    modal.classList.add("active");

    document.body.classList.add("modal-open");
}


/* ================= CLOSE PORTFOLIO ================= */

function closePortfolio() {

    const modal = document.getElementById("portfolioModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");
}


/* ================= CHANGE PAGE ================= */

function changePortfolio(direction) {

    currentPortfolio += direction;

    if (currentPortfolio > portfolioPages.length) {
        currentPortfolio = 1;
    }

    if (currentPortfolio < 1) {
        currentPortfolio = portfolioPages.length;
    }

    const modalImage = document.getElementById("modalImage");
    const modalNumber = document.getElementById("modalNumber");

    if (!modalImage || !modalNumber) {
        return;
    }

    modalImage.style.opacity = "0";

    setTimeout(() => {

        modalImage.src =
            portfolioPages[currentPortfolio - 1];

        modalNumber.textContent =
            String(currentPortfolio).padStart(2, "0");

        modalImage.style.opacity = "1";

    }, 150);
}


/* ================= KEYBOARD CONTROL ================= */

document.addEventListener("keydown", function(event) {

    const modal =
        document.getElementById("portfolioModal");

    if (!modal || !modal.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closePortfolio();
    }

    if (event.key === "ArrowRight") {
        changePortfolio(1);
    }

    if (event.key === "ArrowLeft") {
        changePortfolio(-1);
    }

});


/* ================= CLICK OUTSIDE MODAL ================= */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("portfolioModal");

    if (!modal) {
        return;
    }

    if (
        event.target === modal
    ) {
        closePortfolio();
    }

});


/* ================= MOBILE MENU ================= */

const navLinks =
    document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {

            const target =
                document.querySelector(href);

            if (target) {

                setTimeout(() => {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 50);

            }

        }

    });

});


/* ================= IMAGE FADE ================= */

const modalImage =
    document.getElementById("modalImage");

if (modalImage) {

    modalImage.addEventListener("load", () => {

        modalImage.style.opacity = "1";

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".activity-card, .certificate-card, .timeline-item, .value, .activity-feature, .about-grid"
);

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".navbar nav a");


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                    });

                    const activeLink =
                        document.querySelector(
                            `.navbar nav a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },

        {
            rootMargin: "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* ================= IMAGE ERROR HANDLER ================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", function() {

        console.warn(
            "ไม่พบรูปภาพ:",
            this.getAttribute("src")
        );

        this.style.background =
            "#f8eee0";

    });

});


/* ================= PRELOAD PORTFOLIO ================= */

portfolioPages.forEach(src => {

    const image = new Image();

    image.src = src;

});


/* ================= START ================= */

console.log(
    "Yingkarn Portfolio Website Loaded ✦"
);
