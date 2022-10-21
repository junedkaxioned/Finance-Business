// DOM Elements
var header = document.querySelector('header');
var backToTop = document.querySelector('.top-icon');
var hamBurger = document.querySelector('.hamburger');
var navbar = document.querySelector('nav');
var navList = document.querySelectorAll('.nav-list')
var tabs = document.querySelectorAll('.service-tab');
var tabContents = document.querySelectorAll('.content');
var counters = document.querySelectorAll('.counter');
var counterContainer = document.querySelector('.counters')


// Events On Windows Start
window.addEventListener('scroll', function () {
  stickyNav();
  moveToTop();
});
// Events On Windows End


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


// NavBar Menu Active Function Start
var url = location.pathname;
navList.forEach(function (listItem) {
  var navURL = listItem.getAttribute('href');
  listItem.classList.remove('active');
  // Condition for Checking the url and the href is same 
  if (url.replace('/','') === navURL) {
    listItem.classList.add('active');
  }
})
// NavBar Menu Active Function End


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


// Tab Function Start
function tabFunction(list, content) {
  list.forEach(function (item, idx) {
    // Events on Tab & accordion
    item.addEventListener('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active');
        content[i].classList.remove('active');
      }    
      this.classList.add('active');
      content[idx].classList.add('active')
    })
  })
}
tabFunction(tabs, tabContents);
// Tab Function End


// Counter Function Start
// Function for each counter
window.addEventListener('scroll', function () {
  if(window.scrollY < counterContainer.offsetHeight)
  counters.forEach(function (counter) {
    var counterTraget = +(counter.getAttribute('data-target'));
    var initial = counterTraget / 100 ;
    var x = 1;
    // Setinterval function 
    var interval = setInterval(function () {
      counter.innerText= Math.ceil(initial * x);
      x++;
      if (x > 100) {
        clearInterval(interval);
      }
    }, 20)
  })
})
// Counter Function End