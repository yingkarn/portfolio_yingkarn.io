/* ==================================================
   YINGKARN PORTFOLIO
   PORTFOLIO IMAGE SYSTEM
================================================== */


/* ==================================================
   PORTFOLIO DATA
================================================== */

const portfolioData = [

    {
        number: "01",
        image: "portfolio01.jpg",
        title: "หน้าปก Portfolio",
        description:
            "แฟ้มสะสมผลงานเพื่อสมัครเข้าศึกษาต่อคณะครุศาสตร์ สาขาวิชาการศึกษาปฐมวัย มหาวิทยาลัยสวนดุสิต"
    },


    {
        number: "02",
        image: "portfolio02.jpg",
        title: "Statement of Purpose",
        description:
            "เหตุผลและแรงบันดาลใจในการศึกษาต่อสาขาวิชาการศึกษาปฐมวัย รวมถึงประสบการณ์ที่ทำให้เกิดความตั้งใจในการเป็นครู"
    },


    {
        number: "03",
        image: "portfolio03.jpg",
        title: "Content",
        description:
            "สารบัญแฟ้มสะสมผลงาน แบ่งออกเป็น Profile, Education, Activities และ Certificate"
    },


    {
        number: "04",
        image: "portfolio04.jpg",
        title: "Profile",
        description:
            "ประวัติส่วนตัว ความสามารถพิเศษ งานอดิเรก ช่องทางการติดต่อ และคติประจำใจของยิ่งกาญจน์"
    },


    {
        number: "05",
        image: "portfolio05.jpg",
        title: "Education",
        description:
            "ประวัติการศึกษาและผลการเรียน ตั้งแต่ระดับประถมศึกษาจนถึงระดับมัธยมศึกษาตอนปลาย"
    },


    {
        number: "06",
        image: "portfolio06.jpg",
        title: "กิจกรรมที่ภาคภูมิใจ",
        description:
            "ประสบการณ์สังเกตการสอนและฝึกประสบการณ์กับเด็กปฐมวัย ณ ศูนย์เด็กเล็กวิทยาเขตสิรินธรราชวิทยาลัย"
    },


    {
        number: "07",
        image: "portfolio07.jpg",
        title: "SHORT FILM INSURANCE CONTEST",
        description:
            "การเข้าร่วมการแข่งขัน SHORT FILM INSURANCE CONTEST และการพัฒนาทักษะด้านการคิดสร้างสรรค์ การเขียนบท การถ่ายทำ และการตัดต่อ"
    },


    {
        number: "08",
        image: "portfolio08.jpg",
        title: "กิจกรรมที่เข้าร่วม",
        description:
            "การออกแบบฉากสแตน การประดิษฐ์ชุดรีไซเคิล การเป็นนักดนตรีวงโยธวาทิต และกิจกรรมรณรงค์ต่อต้านยาเสพติด"
    },


    {
        number: "09",
        image: "portfolio09.jpg",
        title: "กิจกรรมที่เข้าร่วม",
        description:
            "การจัดทำพานไหว้ครู การแข่งขัน TO BE MUSIC & COVER DANCE 2026 ค่ายสะเต็มศึกษา และกิจกรรมประดิษฐ์กระทง"
    },


    {
        number: "10",
        image: "portfolio10.jpg",
        title: "กิจกรรมจิตอาสาและกิจกรรมโรงเรียน",
        description:
            "กิจกรรมหล่อเทียนพรรษา ถวายเทียนพรรษา อบรมป้องกันยาเสพติด ซุ้มวันวิทยาศาสตร์ จิตอาสา และกิจกรรมเพื่อสังคม"
    },


    {
        number: "11",
        image: "portfolio11.jpg",
        title: "Certificate",
        description:
            "รวมเกียรติบัตร รางวัล และการเข้าร่วมกิจกรรมด้านวิชาการ ความคิดสร้างสรรค์ STEM และการพัฒนาศักยภาพ"
    },


    {
        number: "12",
        image: "portfolio12.jpg",
        title: "Thank You",
        description:
            "เพราะเด็กทุกคนคือเมล็ดพันธุ์แห่งอนาคต ฉันจึงอยากเป็นครูที่ช่วยให้เมล็ดพันธุ์นั้นเติบโตอย่างงดงาม"
    }

];


/* ==================================================
   ELEMENTS
================================================== */

const portfolioGrid =
    document.getElementById("portfolioGrid");

const modal =
    document.getElementById("portfolioModal");

const modalBackdrop =
    document.getElementById("modalBackdrop");

const modalClose =
    document.getElementById("modalClose");

const modalPrev =
    document.getElementById("modalPrev");

const modalNext =
    document.getElementById("modalNext");

const modalImage =
    document.getElementById("modalImage");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalCurrent =
    document.getElementById("modalCurrent");

const navMenu =
    document.getElementById("navMenu");

const menuToggle =
    document.getElementById("menuToggle");


/* ==================================================
   CURRENT PORTFOLIO
================================================== */

let currentPortfolio = 0;


/* ==================================================
   CREATE PORTFOLIO CARDS
================================================== */

function createPortfolioCards() {

    if (!portfolioGrid) {
        return;
    }


    portfolioGrid.innerHTML = "";


    portfolioData.forEach(
        (item, index) => {

            const card =
                document.createElement("article");


            card.className =
                "portfolio-card";


            card.setAttribute(
                "tabindex",
                "0"
            );


            card.setAttribute(
                "aria-label",
                `เปิดผลงาน ${item.number}`
            );


            card.innerHTML = `

                <div class="portfolio-image">

                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        loading="lazy"
                    >

                </div>


                <div class="portfolio-card-info">

                    <div class="portfolio-number">
                        ${item.number}
                    </div>

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openPortfolio(index);

                }
            );


            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openPortfolio(index);

                    }

                }
            );


            portfolioGrid.appendChild(card);

        }
    );

}


/* ==================================================
   OPEN MODAL
================================================== */

function openPortfolio(index) {

    currentPortfolio = index;

    updateModal();

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   UPDATE MODAL
================================================== */

function updateModal() {

    const item =
        portfolioData[currentPortfolio];


    modalImage.src =
        item.image;


    modalImage.alt =
        item.title;


    modalNumber.textContent =
        item.number;


    modalCurrent.textContent =
        item.number;


    modalTitle.textContent =
        item.title;


    modalDescription.textContent =
        item.description;

}


/* ==================================================
   CLOSE MODAL
================================================== */

function closePortfolio() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


/* ==================================================
   NEXT
================================================== */

function nextPortfolio() {

    currentPortfolio++;

    if (
        currentPortfolio >=
        portfolioData.length
    ) {

        currentPortfolio = 0;

    }

    updateModal();

}


/* ==================================================
   PREVIOUS
================================================== */

function previousPortfolio() {

    currentPortfolio--;

    if (
        currentPortfolio < 0
    ) {

        currentPortfolio =
            portfolioData.length - 1;

    }

    updateModal();

}


/* ==================================================
   MODAL EVENTS
================================================== */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closePortfolio
    );

}


if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closePortfolio
    );

}


if (modalNext) {

    modalNext.addEventListener(
        "click",
        nextPortfolio
    );

}


if (modalPrev) {

    modalPrev.addEventListener(
        "click",
        previousPortfolio
    );

}


/* ==================================================
   KEYBOARD CONTROL
================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !modal.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.key === "Escape"
        ) {

            closePortfolio();

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPortfolio();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousPortfolio();

        }

    }
);


/* ==================================================
   MOBILE MENU
================================================== */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}


/* ==================================================
   CLOSE MOBILE MENU
================================================== */

document
    .querySelectorAll(".nav-menu a")
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "active"
                    );

                }
            );

        }
    );


/* ==================================================
   IMAGE ERROR HANDLER
================================================== */

document.addEventListener(
    "error",
    (event) => {

        if (
            event.target.tagName !== "IMG"
        ) {

            return;

        }


        event.target.classList.add(
            "image-error"
        );


        event.target.alt =
            "ไม่พบรูปภาพ";

    },
    true
);


/* ==================================================
   SMOOTH SECTION ACTIVE EFFECT
================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            (link) => {

                                link.classList.remove(
                                    "active"
                                );

                            }
                        );


                        const activeLink =
                            document.querySelector(
                                `.nav-menu a[href="#${entry.target.id}"]`
                            );


                        if (activeLink) {

                            activeLink.classList.add(
                                "active"
                            );

                        }

                    }

                }
            );

        },
        {
            threshold: .35
        }
    );


sections.forEach(
    (section) => {

        observer.observe(section);

    }
);


/* ==================================================
   INITIALIZE
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createPortfolioCards();

    }
);
