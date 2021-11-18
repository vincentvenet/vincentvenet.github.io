// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
});
// TYPED
var typed = new Typed('.typed', {
  strings: ["Hello everyone, my name is Vincent","Highly motivated, hardworking, open-minded and curious. I have been working in a sandwich course for 5 years now. I have been able to adapt to different work environments, I have developed my analytical skills in my core business which is management control but I also added value in the creation of specifications and tools to improve some processes."],
  typeSpeed: 20,
});

//AOS
AOS.init();


