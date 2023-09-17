/*=========== SHOW MENU ============*/
const showMenu = (toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=========== REMOVE MENU MOBILE ==========*/
const navLink=document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav__link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

/*========== SCROLL SECTIONS ACTIVE LINK =============*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId=current.getAttribute('id')

        if(scrollY>sectionTop && scrollY<= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+ ']').classList.add('active-link')
        }   
        else{
            document.querySelector('.nav__menu a[href*=' +sectionId+ ']').classList.remove('active-link')
        }
     })
}
window.addEventListener('scroll',scrollActive)

/*============== CHANGE BACKGROUND HEADER =========*/
function scrollHeader(){
    const nav=document.getElementById('header')

    if(this.scrollActive>=200) nav.classList.add('scroll-header'); else  nav.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app_data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})
