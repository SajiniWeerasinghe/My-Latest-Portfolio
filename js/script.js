/*=======taggle icon navbar  ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

 /*=======scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*=======sticky ==========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

      /*=======remove taggle icon and navbar when click navbar link ==========*/
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');

};

/*======= scroll reveal ==========*/
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact from', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*====typed.js===*/
const typed = new Typed('.multiple-text',{
    strings: ['Sajini Weerasinghe','Web Developer', 'Frontend Developer', 'Software Engineer', 'Content Writer'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:500,
    loop: true

});





document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".portfolio-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function () {
        container.scrollBy({ left: -320, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        container.scrollBy({ left: 320, behavior: "smooth" });
    });
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click',() => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});




