// chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse)
// {
//     setTimeout(function() {
//         sendResponse({status: true});
//     }, 1);
//     return true;  // Add return true to fix the error.
// });
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
} else {
    console.log('You are on the server')
}

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents =[60,50,40,30,20,20];


window.addEventListener("scroll", () => {
    if (window.pageYOffset >= navbar.offsetTop) {

        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
    sections.forEach((section, i )=> {
        if (window.pageYOffset >= section.offsetTop -10){
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            });
        navbarLinks[i].classList.add("change");
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop){
    document.querySelectorAll(".progress-percent").forEach((el,i) => {
        el.style.width = `${progressBarPercents[i]}%`;
    })
    }
});
