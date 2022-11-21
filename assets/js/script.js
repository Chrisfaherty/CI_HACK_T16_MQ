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
    menuLeft.classList.remove('active');
});

//  Fancy Text Animation
const text = document.querySelector('.fancy-text');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span>' + splitText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 60);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}