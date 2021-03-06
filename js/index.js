const navBar = document.getElementById("nav");

window.addEventListener("scroll", function() {
    if(this.pageYOffset > 0) {
      navBar.classList.add("mobile-animation");
    }else{
        navBar.classList.remove("mobile-animation");
    }
  })

const aboutSec = document.getElementById("about");
const aboutBg = document.getElementsByClassName("about__bg");

const scrollList = document.addEventListener("scroll", () => {
    if(scrollY > 500){
        aboutSec.classList.add("container-animation");
        aboutBg[0].classList.add("abg-animation");
    } 
})

//


const sideNavbar = document.getElementById('t3');
const toggler = document.getElementById('toggle');

const sidenavStyle = () => {
    if(window.innerWidth < 991){
        sideNavbar.classList.replace('show-sidenav-animation' , 'show-sidenav-animation-mobile'); 
        sideNavbar.classList.remove('show-sidenav-animation-hide-mobile');
    }else if(window.innerWidth > 991){
        sideNavbar.classList.replace('show-sidenav-animation-mobile' , 'show-sidenav-animation'); 
        sideNavbar.classList.remove('show-sidenav-animation-hide');
    }
}

const show = () => {
    toggler.classList.toggle("text-light");
        if(sideNavbar.classList.contains("show-sidenav-animation") || sideNavbar.classList.contains("show-sidenav-animation-mobile")){
            window.innerWidth < 991 ? sideNavbar.classList.replace('show-sidenav-animation-mobile','show-sidenav-animation-hide-mobile') : sideNavbar.classList.replace('show-sidenav-animation','show-sidenav-animation-hide');
            toggler.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
        }else if(sideNavbar.classList.contains("show-sidenav-animation-hide") || sideNavbar.classList.contains("show-sidenav-animation-hide-mobile")){
            window.innerWidth < 991 ? sideNavbar.classList.replace('show-sidenav-animation-hide-mobile' , 'show-sidenav-animation-mobile') : sideNavbar.classList.replace('show-sidenav-animation-hide' , 'show-sidenav-animation');
            toggler.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';
        }else{
            window.innerWidth < 991 ? sideNavbar.classList.add("show-sidenav-animation-mobile") : sideNavbar.classList.add("show-sidenav-animation");
            toggler.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';
        }
}

const logo = document.getElementById("logo");
const hideLogo = () => {
    let scrolled = window.scrollY;
    scrolled > 0 ? logo.classList.add('d-none'): logo.classList.remove('d-none');
}

const projectsBorder = () => {
    const projects = document.querySelectorAll('.project');
    if(window.innerWidth < 768){
        projects[1].classList.remove("border-bold-left");
        projects[1].classList.add("border-bold-top");
    }else{
        projects[1].classList.add("border-bold-left");
        projects[1].classList.remove("border-bold-top");
    }
}

window.addEventListener('resize', ()=>{
    sidenavStyle();
    projectsBorder();
});
window.onload = projectsBorder;
window.addEventListener('scroll', hideLogo, false);