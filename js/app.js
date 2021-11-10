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

var frag = document.createDocumentFragment();
var nav = document.getElementById("navbar__list");
var findMe = document.querySelectorAll('.landing__container');
var sections = [
    document.getElementById('section1'),
    document.getElementById('section2'),
    document.getElementById('section3'),
    document.getElementById('section4'),
];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const scroll = function (id) {

};

var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
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
        var listItem = document.createElement("li");
        listItem.className = "menu__link";
        listItem.textContent = `Section ${i}`;
        frag.appendChild(listItem);
    }
    nav.appendChild(frag);
    
};


// Add class 'active' to section when near top of viewport
function setActive() {

    sections.forEach(function (element) {
        window.addEventListener('scroll', function (event) {
            nav.style.display = 'flex';
            setTimeout(function (){
                nav.style.display = 'none';
            },5000);
            if (isInViewport(element)) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        }, false);
    });
};




// Scroll to anchor ID using scrollTO event
function scrollTO() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    var listItem = document.querySelectorAll(".menu__link");
    var i = 0;
    listItem.forEach(function (item) {
        var domRect = sections[i].getBoundingClientRect();
        item.addEventListener('click', function () {
            window.scrollTo({
                top: domRect.y,
                left: 0,
                behavior: 'smooth'
            });
        });
        i++;
    });
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

