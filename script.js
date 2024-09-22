// Change Navbar Background on Scroll
window.onscroll = function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#333";
  } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }
};

// Product section
const productCarousel = document.querySelector('.carousel');
const productItems = document.querySelectorAll('.carousel-item'); // Renamed to productItems
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Update active class based on current index for product carousel
function updateProductCarousel() {
productItems.forEach((item, index) => {
  item.classList.remove('active');
  if (index === currentIndex) {
    item.classList.add('active');
  }
});

// Adjust carousel translation
const offset = -currentIndex * (productItems[0].clientWidth + 20); // 20px gap
productCarousel.style.transform = `translateX(${offset}px)`;
}

// Previous Button Click for product carousel
prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex > 0) ? currentIndex - 1 : productItems.length - 1;
updateProductCarousel();
});

// Next Button Click for product carousel
nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex < productItems.length - 1) ? currentIndex + 1 : 0;
updateProductCarousel();
});

// Add click animation effect on center product item
productItems.forEach((item) => {
item.addEventListener('click', () => {
  productItems.forEach((itm) => itm.classList.remove('active'));
  item.classList.add('active');
});
});

// Testimonials section
const testimonialDots = document.querySelectorAll('.dot'); // Renamed to testimonialDots
const testimonialItems = document.querySelectorAll('.testimonial-item'); // Renamed to testimonialItems
let testimonialIndex = 0;

function updateTestimonialCarousel() {
  testimonialItems.forEach((item, i) => {
      item.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  });

  testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === testimonialIndex);
  });
}

testimonialDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
      testimonialIndex = i;
      updateTestimonialCarousel();
  });
});

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonialItems.length;
  updateTestimonialCarousel();
}, 2000); // Now it will slide every 6 seconds