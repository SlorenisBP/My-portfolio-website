// chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse)
// {
//     setTimeout(function() {
//         sendResponse({status: true});
//     }, 1);
//     return true;  // Add return true to fix the error.
// });

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= navbar.offsetTop){
        // console.log('sticky');
        navbar.classList.add('sticky')
    } else{ navbar.classList.remove('sticky');
    }
})