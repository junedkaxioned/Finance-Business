// DOM Elements
var header = document.querySelector('header');
var backToTop = document.querySelector('.top-icon');
var hamBurger = document.querySelector('.hamburger');
var navbar = document.querySelector('nav')

// EVents On Windows
window.addEventListener('scroll', function () {
  stickyNav();
  moveToTop();
});

// Sticky Nav Function Start
function stickyNav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add('active')
  }else {
    header.classList.remove('active')
  }
}
// Sticky Nav Function End

// Mobile Navbar Function Start
hamBurger.addEventListener('click', function () {
  hamBurger.classList.toggle('active')
  navbar.classList.toggle('active')
})
// Mobile Navbar Function End

// Back to top Function Start
function moveToTop() {
  if (window.scrollY > 15) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
  backToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}
// Back to top Function End
