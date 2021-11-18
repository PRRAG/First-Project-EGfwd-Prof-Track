/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let frag = document.createDocumentFragment();
let nav = document.getElementById("navbar__list");
let findMe = document.querySelectorAll('.landing__container');
let sections = document.querySelectorAll('section');
let navItem;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const scroll = function (id) {

};

const isInViewport = function (elem) {
    let distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.bottom <= (window.innerHeight + distance.height - 200 || document.documentElement.clientHeight + distance.height)
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav() {

    for (let i = 1; i <= sections.length; i++) {
        let listItem = document.createElement("li");
        listItem.className = "menu__link";
        listItem.textContent = `Section ${i}`;
        frag.appendChild(listItem);
    }
    nav.appendChild(frag);
    navItem = document.querySelectorAll('.menu__link');
};


// Add class 'active' to section when near top of viewport
function setActive() {
    window.addEventListener('scroll', function (event) {
        for (let i = 0; i < sections.length; i++) {
            nav.style.display = 'flex';
            setTimeout(function () {
                nav.style.display = 'none';
            }, 10000);
            if (isInViewport(sections[i])) {
                sections[i].classList.add("active");
                navItem[i].className = "active_nav";
            } else {
                sections[i].classList.remove("active");
                navItem[i].className = "menu__link";
            }
        }
    }, false);

};




// Scroll to anchor ID using scrollTO event
function scrollTO() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    let listItem = document.querySelectorAll(".menu__link");
    for (let i = 0; i < sections.length; i++) {

        listItem[i].addEventListener('click', function () {
            sections[i].scrollIntoView({ behavior: "smooth" });
            
        });
    }
};


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNav();
// Scroll to section on link click
scrollTO();
// Set sections as active
setActive();

