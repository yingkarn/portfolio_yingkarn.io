/* =========================================
   PORTFOLIO DATA
========================================= */

const portfolioData = [

  {
    number: "01",
    image: "portfolio01.jpg",
    title: "หน้าปก Portfolio",
    description: "แฟ้มสะสมผลงานสำหรับการศึกษาต่อ"
  },

  {
    number: "02",
    image: "portfolio02.jpg",
    title: "Statement of Purpose",
    description: "เหตุผลและแรงบันดาลใจในการศึกษาต่อ"
  },

  {
    number: "03",
    image: "portfolio03.jpg",
    title: "Profile",
    description: "ประวัติส่วนตัวและข้อมูลเกี่ยวกับฉัน"
  },

  {
    number: "04",
    image: "portfolio04.jpg",
    title: "Education",
    description: "ประวัติการศึกษาและเส้นทางการเรียนรู้"
  },

  {
    number: "05",
    image: "portfolio05.jpg",
    title: "Transcript",
    description: "ผลการเรียนและความตั้งใจในการศึกษา"
  },

  {
    number: "06",
    image: "portfolio06.jpg",
    title: "ประสบการณ์ฝึกงาน",
    description: "ประสบการณ์จากการฝึกงานที่โรงพยาบาลกระทุ่มแบน"
  },

  {
    number: "07",
    image: "portfolio07.jpg",
    title: "STEM Education",
    description: "กิจกรรม STEM และการเรียนรู้ผ่านการลงมือทำ"
  },

  {
    number: "08",
    image: "portfolio08.jpg",
    title: "กิจกรรมโรงเรียน",
    description: "กิจกรรมและประสบการณ์ภายในโรงเรียน"
  },

  {
    number: "09",
    image: "portfolio09.jpg",
    title: "กิจกรรม",
    description: "กิจกรรมที่ช่วยพัฒนาการทำงานร่วมกับผู้อื่น"
  },

  {
    number: "10",
    image: "portfolio10.jpg",
    title: "กิจกรรมเพื่อสังคม",
    description: "จิตอาสาและการทำงานเป็นทีม"
  },

  {
    number: "11",
    image: "portfolio11.jpg",
    title: "Certificates",
    description: "เกียรติบัตรและผลงานที่ได้รับ"
  },

  {
    number: "12",
    image: "portfolio12.jpg",
    title: "Thank You",
    description: "Caring beyond what the eyes can see"
  }

];


/* =========================================
   CREATE PORTFOLIO CARDS
========================================= */

const portfolioGrid =
  document.getElementById("portfolioGrid");

portfolioData.forEach((item, index) => {

  const card = document.createElement("div");

  card.className = "portfolio-card";

  card.onclick = () => openModal(index);

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

  portfolioGrid.appendChild(card);

});


/* =========================================
   MODAL
========================================= */

let currentIndex = 0;

const modal =
  document.getElementById("portfolioModal");

const modalImage =
  document.getElementById("modalImage");

const modalNumber =
  document.getElementById("modalNumber");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");


function openModal(index) {

  currentIndex = index;

  updateModal();

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}


function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "auto";
}


function updateModal() {

  const item = portfolioData[currentIndex];

  modalImage.src = item.image;

  modalImage.alt = item.title;

  modalNumber.textContent = item.number;

  modalTitle.textContent = item.title;

  modalDescription.textContent =
    item.description;
}


function nextPortfolio() {

  currentIndex++;

  if (currentIndex >= portfolioData.length) {
    currentIndex = 0;
  }

  updateModal();
}


function previousPortfolio() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = portfolioData.length - 1;
  }

  updateModal();
}


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener("keydown", function(event) {

  if (!modal.classList.contains("active")) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "ArrowRight") {
    nextPortfolio();
  }

  if (event.key === "ArrowLeft") {
    previousPortfolio();
  }

});


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

  const nav =
    document.querySelector(".nav-links");

  nav.classList.toggle("active");

}


/* ปิดเมนูเมื่อกดลิงก์ */

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    document
      .querySelector(".nav-links")
      .classList.remove("active");

  });

});


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

document.addEventListener(
  "error",
  function(event) {

    if (
      event.target.tagName === "IMG"
    ) {

      event.target.style.background =
        "#f3e5d6";

    }

  },
  true
);
