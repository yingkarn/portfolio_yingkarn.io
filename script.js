/* =====================================================
   YINGKARN PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   PORTFOLIO IMAGES
===================================================== */

const portfolioPages = [
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

let currentPortfolio = 1;


/* =====================================================
   OPEN PORTFOLIO
===================================================== */

function openPortfolio(page) {

    currentPortfolio = page;

    const modal =
        document.getElementById("portfolioModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalNumber =
        document.getElementById("modalNumber");


    if (!modal || !modalImage || !modalNumber) {
        return;
    }


    modalImage.src =
        portfolioPages[currentPortfolio - 1];


    modalNumber.textContent =
        String(currentPortfolio).padStart(2,"0");


    modal.classList.add("active");

    document.body.classList.add("modal-open");
}


/* =====================================================
   CLOSE PORTFOLIO
===================================================== */

function closePortfolio() {

    const modal =
        document.getElementById("portfolioModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.classList.remove("modal-open");
}


/* =====================================================
   NEXT / PREVIOUS
===================================================== */

function changePortfolio(direction) {

    currentPortfolio += direction;


    if (
        currentPortfolio >
        portfolioPages.length
    ) {

        currentPortfolio = 1;

    }


    if (currentPortfolio < 1) {

        currentPortfolio =
            portfolioPages.length;

    }


    const modalImage =
        document.getElementById("modalImage");

    const modalNumber =
        document.getElementById("modalNumber");


    if (!modalImage || !modalNumber) {
        return;
    }


    modalImage.style.opacity = "0";


    setTimeout(() => {

        modalImage.src =
            portfolioPages[
                currentPortfolio - 1
            ];


        modalNumber.textContent =
            String(currentPortfolio)
                .padStart(2,"0");


        modalImage.style.opacity = "1";

    },150);

}


/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document.getElementById(
                "portfolioModal"
            );


        if (
            !modal ||
            !modal.classList.contains("active")
        ) {
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

    }
);


/* =====================================================
   CLICK OUTSIDE IMAGE TO CLOSE
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "portfolioModal"
            );


        if (!modal) {
            return;
        }


        if (event.target === modal) {

            closePortfolio();

        }

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".activity-card, " +
        ".certificate-card, " +
        ".timeline-item, " +
        ".value, " +
        ".activity-feature, " +
        ".about-grid"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );


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


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    navigationLinks
                        .forEach(link => {

                            link.classList.remove(
                                "active"
                            );

                        });


                    const activeLink =
                        document.querySelector(
                            `.navbar nav a[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =====================================================
   PRELOAD ALL PORTFOLIO IMAGES
===================================================== */

portfolioPages.forEach(src => {

    const image =
        new Image();

    image.src = src;

});


/* =====================================================
   IMAGE ERROR CHECK
===================================================== */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            function() {

                console.warn(
                    "ไม่พบรูปภาพ:",
                    this.getAttribute("src")
                );

            }
        );

    });


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document
    .querySelectorAll(
        '.navbar nav a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute("href");


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


/* =====================================================
   START
===================================================== */

console.log(
    "✦ Yingkarn Portfolio loaded successfully ✦"
);
