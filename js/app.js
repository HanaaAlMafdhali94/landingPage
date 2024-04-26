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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navList = document.getElementById("navbar__list");

const navbar1 = document.createElement('li');
const sec1 = document.createElement('a');
sec1.href = '#section1'
sec1.textContent = "section1";
navbar1.className = "menu__link";
navbar1.appendChild(sec1);
navList.appendChild(navbar1);


const navbar2 = document.createElement('li');
const sec2 = document.createElement('a');
sec2.href = '#section2'
sec2.textContent = "section2";
navbar2.className = "menu__link";
navbar2.appendChild(sec2);
navList.appendChild(navbar2);


const navbar3 = document.createElement('li');
const sec3 = document.createElement('a');
sec3.href = '#section3'
sec3.textContent = "section3";
navbar3.className = "menu__link";
navbar3.appendChild(sec3);
navList.appendChild(navbar3);

const navbar4 = document.createElement('li');
const sec4 = document.createElement('a');
sec4.href = '#section4'
sec4.textContent = "section4";
navbar4.className = "menu__link";
navbar4.appendChild(sec4);
navList.appendChild(navbar4);

//creating section 4
const mainCont = document.querySelector('main');
const sec4Text = `<section id="section4" data-nav="Section 4">
<div class="landing__container">
  <h2>Section 4</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`;
mainCont.insertAdjacentHTML('beforeend', sec4Text);

// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
/* link.addEventListener('onmouseover', function() {
    link.classList.add('highlight');
}); */
/* 
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const activeSection = entry.target.id;
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.style.backgroundColor = "white";
                if(link.getAttribute('href') === `#${activeSection}`) {
                    link.classList.add('active');
                    link.style.backgroundColor = "red";
                }
            });
        }
    });
}, options); */
/* const classes = document.querySelectorAll('#landing__container');
for (const Class in classes) {

}
const s = document.querySelectorAll("section");
const s2 = document.querySelector("#section2");
const s3 = document.querySelector("#section3");
const s4 = document.querySelector("#section4");

function eventLs() {
    for (const key in s) {
        if (isInViewPort(key)) {
            console.log(key.textContent);
        }
    }
    if (isInViewPort(s1)) {
        console.log("S1 isInViewport");
        s1.classList.add('active_class');
        s2.classList.remove('active_class');
        s3.classList.remove('active_class');
        s4.classList.remove('active_class');
    }
    if (isInViewPort(s2)) {
        console.log("S2 isInViewport");
        s1.classList.remove('active_class');
        s2.classList.add('active_class');
        s3.classList.remove('active_class');
        s4.classList.remove('active_class');
    }
    if (isInViewPort(s3)) {
        console.log("S3 isInViewport");
        s1.classList.remove('active_class');
        s2.classList.remove('active_class');
        s3.classList.add('active_class');
        s4.classList.remove('active_class');
    }
    if (isInViewPort(s4)) {
        console.log("S4 isInViewport");
        s1.classList.remove('active_class');
        s2.classList.remove('active_class');
        s3.classList.remove('active_class');
        s4.classList.add('active_class');
    }
}

document.addEventListener('scroll', eventLs());

 */


// Scroll to anchor ID using scrollTO event


const navlinksAll = document.querySelectorAll(".menu__link");
const sectionsAll = document.querySelectorAll("section");
let currentSection = 'section1';
console.log(sectionsAll);

document.addEventListener('scroll', () => {
        sectionsAll.forEach(sectionEL => {
            if (window.scrollY >= (sectionEL.offsetTop - (sectionEL.clientHeight/2)) ) {
                currentSection = sectionEL.id;
            }
        });
        navLinks.forEach(navlinkEL => {
            if (navlinkEL.href.includes(currentSection)) {
                document.querySelector('.active').classList.remove('active');
                navlinkEL.classList.add('active');
            }
        });
    }
);

document.querySelectorAll('.menue__link a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = document.querySelector(this.getAttribute('href'));
        sections.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
