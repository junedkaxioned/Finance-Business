// DOM Elements
var header = document.querySelector('header');
var backToTop = document.querySelector('.top-icon');
var hamBurger = document.querySelector('.hamburger');
var navbar = document.querySelector('nav');
var navList = document.querySelectorAll('.nav-list')
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var bannerList = document.querySelectorAll('.slider');
var tabs = document.querySelectorAll('.service-tab');
var tabContents = document.querySelectorAll('.content');
var counters = document.querySelectorAll('.counter');
var counterContainer = document.querySelector('.counters')
var fullName = document.querySelector('.full-name');
var email = document.querySelector('.email-id');
var form = document.querySelector('.form')
var footerForm = document.querySelector('.footer-form')
var footerFullName = document.querySelector('.foot-full-name');
var footerEmail = document.querySelector('.foot-email-id');
var subject = document.querySelector('.subject');
var submitButton = document.querySelector('.submit-btn');
var footerSubmit = document.querySelector('.foot-submit-btn')
var inputs = document.querySelectorAll('.input');
var footInputs = document.querySelectorAll('.foot-input');
var sucessMsg = document.querySelector('.sucess');
var nameReg = /^[a-zA-Z ]+$/;
var emailReg = /^([a-z][a-z0-9\-\_\.]+[a-z0-9])\@([a-z]{2,})\.([a-z]{2,})$/;
var subReg = /^([a-zA-Z0-9][a-zA-Z0-9\s /-]+)$/;


function homePage() {

  formFunction();

  // Slider Function  Start -------------------------------------------------------------------------------------
  var x = 0;
  function slider(num) {
    for (let i = 0; i < bannerList.length; i++) {
      bannerList[i].classList.remove('active')
    }
    bannerList[num].classList.add('active');
  }
  slider(x);

  // Events on Next Button
  nextBtn.addEventListener('click', function () {
    x++
    if (x == (bannerList.length)) {
      x = 0;
    }
    slider(x);
  })

  // Events on Previous Button
  prevBtn.addEventListener('click', function () {
    x--
    if (x < 0) {
      x = bannerList.length - 1;
    }
    slider(x);
    dotActive(x)
  })
  // Slider Function  End -------------------------------------------------------------------------------------

  // Counter Function Start -------------------------------------------------------------------------------------
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
  // Counter Function End -------------------------------------------------------------------------------------
  
}

// Events On Windows Start -------------------------------------------------------------------------------------
window.addEventListener('scroll', function () {
  stickyNav();
  moveToTop();
});
// Events On Windows End -------------------------------------------------------------------------------------


// Sticky Nav Function Start -------------------------------------------------------------------------------------
function stickyNav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add('active')
  }else {
    header.classList.remove('active')
  }
}
// Sticky Nav Function End -------------------------------------------------------------------------------------

 
// Mobile Navbar Function Start -------------------------------------------------------------------------------------
hamBurger.addEventListener('click', function () {
  hamBurger.classList.toggle('active')
  navbar.classList.toggle('active')
})
// Mobile Navbar Function End -------------------------------------------------------------------------------------


// NavBar Menu Active Function Start -------------------------------------------------------------------------------------
var url = location.pathname;
navList.forEach(function (listItem) {
  var navURL = listItem.getAttribute('href');
  listItem.classList.remove('active');
  // Condition for Checking the url and the href is same 
  if (url.replace('/','') === navURL) {
    listItem.classList.add('active');
  }
})
// NavBar Menu Active Function End -------------------------------------------------------------------------------------


// Back to top Function Start -------------------------------------------------------------------------------------
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
// Back to top Function End -------------------------------------------------------------------------------------


function servicePageFunction() {
  formFunction()

  // Tab Function Start -------------------------------------------------------------------------------------
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
// Tab Function End -------------------------------------------------------------------------------------

}


function contactPageFunction() {
  formFunction()
}


function formFunction() {
  // Form validation -------------------------------------------------------------------------------------
  // Function for getting inputs and removing error (blur)
  // Main Form Inputs
  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      formErrors(input);
    })
    input.addEventListener('keyup', function () {
      formErrors(input);
    })
  })
  // Footer Form Inputs
  footInputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      formErrors(input);
    })
    input.addEventListener('keyup', function () {
      formErrors(input);
    })
  })
  
  // function for Error
  function formErrors(input) {
    var inputError = input.parentElement.children[1];
  
    // Conditon for input error
    if (!input.value) {
      // input form
      input.classList.add('active');
      inputError.classList.add('error-active')
      inputError.innerText = "Enter Your " + input.name;
    } else {
      input.classList.remove('active');
      inputError.classList.remove('error-active')
  
      // VALIDATION
      // Condition for Address
      if (input.name == "Email") {
        if (emailReg.test(input.value)) {
          input.classList.remove('active');
          inputError.classList.remove('error-active')
        } else {
          input.classList.add('active');
          inputError.classList.add('error-active')
          inputError.innerText = "Capital Letter Not Allowed";
        }
      } else if (input.name == "Subject") {
        if (subReg.test(input.value)) {
          input.classList.remove('active');
          inputError.classList.remove('error-active')
        } else {
          input.classList.add('active');
          inputError.classList.add('error-active')
          inputError.innerText = "Symbols are Not Allowed";
        }
      } else {
        // Condition for Names
        if (nameReg.test(input.value)) {
          input.classList.remove('active');
          inputError.classList.remove('error-active')
        } else {
          input.classList.add('active');
          inputError.classList.add('error-active')
          inputError.innerText = "Numbers and Symbol Not Allowed";
        }
      }
    }
  }
  
  
  // Events on Submit button
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    var activeError = form.querySelectorAll('.error-active');
    // Conditon for input in filled or not
    if (fullName.value && email.value && subject.value && (activeError.length === 0)) { 
      var div = document.createElement('div');
      div.classList.add('thank-you');
      div.innerHTML =  `
        <span class="thank-icon section-heading">Form Submited</span>
        <p class ="text">Thank you for filling out your information!</p>
      `
      sucessMsg.append(div);
      var thankYou = document.querySelector('.thank-you');
      setTimeout(function() {
        thankYou.remove();
      }, 2000);
      form.reset();
    } else {
      inputs.forEach(function (input) {
        formErrors(input);
      })
    }
  })

  footerSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    var activeError = footerForm.querySelectorAll('.error-active');
    // Conditon for input in filled or not
    if (footerFullName.value && footerEmail.value && (activeError.length === 0)) { 
        alert('Thank You For Submiting The Form')
        footerForm.reset();
    } else {
      footInputs.forEach(function (input) {
        formErrors(input);
      })
    }
  })

  // Form validation End ------------------------------------------------------------------------------------- 
}


// Condition to run the function on pages
if (document.body.classList.contains('home-page')) {
  homePage() ;
} else if (document.body.classList.contains('our-service-page')){
  servicePageFunction();
} else if (document.body.classList.contains('contact-us-page')){
  contactPageFunction();
}