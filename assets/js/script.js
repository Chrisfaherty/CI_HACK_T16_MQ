// Declare const for DOM elements (toggler menu)
const menuToggle = document.querySelector('.toggler');
const menuToggle2 = document.querySelector('.toggler2');
const closeMenu = document.querySelector('.fa-times');
const menuLeft = document.querySelector('.menu');

// Remove and add classlist for toggler menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuLeft.classList.toggle('active');
    closeMenu.classList.toggle('active');
});
   
   
menuToggle2.addEventListener('click', () => {
       menuLeft.classList.remove('active')
});
