(function () {
  // Smooth scroll for all [data-go] buttons
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-go]');
    if (!btn) return;
    var target = document.getElementById(btn.dataset.go);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });

  // Nav background on scroll
  var nav = document.querySelector('.cc-nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.classList.add('nav-on');
    } else {
      nav.classList.remove('nav-on');
    }
  });

  // Reveal on scroll (IntersectionObserver)
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('revealed');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(function (el) {
    io.observe(el);
  });
})();

//Galerie photos 

const galleryImages = [
  "/FACADE.JPG",
  "/galerie-chambre-principale.jpg",
  "/galerie-seconde-chambre",
  "/galerie-terasse-ext.jpg",
  "/galerie-cuisine.jpg", 
  "/galerie-terasse.jpg", 
  "/galerie-salon.jpg"
];

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("lightboxClose");
const prevBtn = document.getElementById("lightboxPrev");
const nextBtn = document.getElementById("lightboxNext");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = galleryImages[currentIndex];
  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex];
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex];
}

document.querySelectorAll(".g-cell").forEach((cell) => {
  cell.addEventListener("click", () => {
    openLightbox(Number(cell.dataset.index));
  });
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});