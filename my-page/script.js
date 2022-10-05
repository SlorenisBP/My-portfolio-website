// chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse)
// {
//     setTimeout(function() {
//         sendResponse({status: true});
//     }, 1);
//     return true;  // Add return true to fix the error.
// });

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link')


window.addEventListener("scroll", () => {
    if (window.pageYOffset >= navbar.offsetTop) {
        // console.log('sticky');
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
    sections.forEach(sections => {
        if (window.pageYOffset >= section.offsetTop -10){

        }

            })
});
