const burger = document.querySelector('.burger')
const navlink = document.querySelector('.navlinks')
const navbar = document.querySelector('nav')

burger.addEventListener('click',() => {
    navlink.classList.toggle('nav-active')
    burger.classList.toggle('burger-close')
})

// window.onscroll = () => {

//     if(scrollY > 500) {
//       navbar.classList.add('nav-bg')
//       navlink.classList.add('nav-bg')
//     } else {
//       navbar.classList.remove('nav-bg')
//       navlink.classList.remove('nav-bg')
//     }
// }

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    //    else {
    //     reveals[i].classList.remove("active");
    //   }
    }
  }

  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
//   reveal();

