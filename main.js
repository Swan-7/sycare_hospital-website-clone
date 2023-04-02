const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

const openNav = () => {
    navItems.style.display = "flex";
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = "none";
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)


//Close nav menu when a menu item is clicked
if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav_items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}


//Change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
//on scroll, (if the vertical scroll position of the window (window.scrollY) is greater than 0),  the 'window-scroll' class is added to the nav element. Otherwise its removed.

//TESTIMONIALS SECTION (Swiper JS)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },

    //Responsive Breakpoints
    breakpoints: {
        //when window width is >= 600px
        600: {
            slidesPerView: 2
        },

        //when window width is >= 1024px
        1024: {
            slidesPerView: 3
        }
    }
});