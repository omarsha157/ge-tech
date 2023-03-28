const burger = document.querySelector('.burger')
const navlink = document.querySelector('.navlinks')
const navlinks = document.querySelectorAll('.navlinks li')
const navbar = document.querySelector('nav')

burger.addEventListener('click',() => {
    navlink.classList.toggle('nav-active')
    burger.classList.toggle('burger-close')
})

navlinks.forEach(link => {
  link.addEventListener('click', () => {
    navlink.classList.remove('nav-active')
    burger.classList.remove('burger-close')
  })
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
      var elementVisible = 300;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    //    else {
    //     reveals[i].classList.remove("active");
    //   }
    }
  }

  window.addEventListener("scroll", reveal);


