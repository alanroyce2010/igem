// script.js

// This example script is basic and does not implement any complex functionality.
// You can customize and extend this based on your specific needs.

console.log("IGEM Project Homepage Script Loaded!");
const menuToggle = document.querySelector('.menu-toggle');
const slideoutMenu = document.querySelector('.slideout-menu');

menuToggle.addEventListener('click', function() {
  slideoutMenu.classList.toggle('open');
});
// function darkModeFunc() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//     var toggler = document.getElementById("dark-mode-toggler");
//     if (toggler.innerHTML == "Dark Mode") {
//         toggler.innerHTML = "Light Mode";
//     } else {
//         toggler.innerHTML = "Dark Mode";
//     }
//     var toggler_2 = document.getElementById("dark-mode-toggler-2");
//     if (toggler_2.innerHTML == "Dark Mode") {
//         toggler_2.innerHTML = "Light Mode";
//     } else {
//         toggler_2.innerHTML = "Dark Mode";
//     }
// }
