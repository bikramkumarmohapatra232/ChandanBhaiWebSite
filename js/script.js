/* ---------------------------- */
/* Existing JS for Contact Form */
/* ---------------------------- */
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  });
}

/* ---------------------------- */
/* NEW: Slider Auto & Manual Nav*/
/* ---------------------------- */

let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Show the first slide
showSlide(currentSlideIndex);

// Auto-switch slides every 4 seconds
setInterval(nextSlide, 4000);

// If buttons exist, add click listeners
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  // Show the current slide
  slides[index].classList.add("active");
}

function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}
