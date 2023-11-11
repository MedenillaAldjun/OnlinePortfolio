let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
    }
   });

//Sticky navbar

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

};


let currentSlider = 1;

function changeSlider() {
    const current = document.getElementById(`slider${currentSlider}`);
    current.classList.remove("active");

    // Hide the h2 element of the first slider
    const currentH2 = current.querySelector("h2");
    if (currentH2) {
        currentH2.style.display = "none";
    }

    currentSlider = currentSlider === 1 ? 2 : 1;

    const next = document.getElementById(`slider${currentSlider}`);
    next.classList.add("active");

    // Show the h2 element of the second slider
    const nextH2 = next.querySelector("h2");
    if (nextH2) {
        nextH2.style.display = "block";
    }

    // Update the text content and add a chevron icon based on the active slider
    const viewNextText = document.getElementById("viewNextText");
    if (viewNextText) {
        const chevronIcon = document.getElementById("chevronIcon");

        if (currentSlider === 2) {
            viewNextText.textContent = "View Experience";
            chevronIcon.className = "bx bx-left-arrow-alt";
        } else {
            viewNextText.textContent = "View Awards";
            chevronIcon.className = "bx bx-right-arrow-alt";
        }

        // Adjust the order of text and icon
        viewNextText.style.order = currentSlider === 2 ? "2" : "1";
        chevronIcon.style.order = currentSlider === 2 ? "1" : "2";
    }
}






