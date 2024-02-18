// Get the nav element by its id
const nav = document.getElementById("nav");

// Get the nav links element by its id
const navLinks = document.getElementById("nav-links");

// Get the nav scroll buttons by their ids
const navScrollLeft = document.getElementById("nav-scroll-left");
const navScrollRight = document.getElementById("nav-scroll-right");

// Add a click event listener to the nav scroll left button
navScrollLeft.addEventListener("click", () => {
  // Scroll the nav links element to the left by 100 pixels
  navLinks.scrollBy(-100, 0);
});

// Add a click event listener to the nav scroll right button
navScrollRight.addEventListener("click", () => {
  // Scroll the nav links element to the right by 100 pixels
  navLinks.scrollBy(100, 0);
});

// Add a click event listener to the nav element
nav.addEventListener("click", (event) => {
  // Check if the clicked element is a nav link
  if (event.target.classList.contains("nav-link")) {
    // Toggle the nav open class on the nav element
    nav.classList.toggle("nav-open");
  }
});
