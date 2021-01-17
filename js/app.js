const arr = ['p1','p2','p3','p4'];
let index = 0;
let next;
let project, nextProject; 

//carousel effect in project section
/*let carouselItem = () => {
    index > 3 ? index = 0 : index = index;
    next = index + 1;
    next > 3 ? next = 0 : next = next;
    project = document.getElementById(arr[index]);
    nextProject = document.getElementById(arr[next]);
    project.classList.toggle('active-project');
    nextProject.classList.toggle('active-project');
    index++;
}

(carousel = () => {
    setInterval(carouselItem, 8000);
})();
*/
const navBar = document.getElementById("nav");
//
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