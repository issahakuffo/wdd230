document.getElementById('lastModified').textContent = document.lastModified;

const menuButton = document.querySelector('.hamburger-menu');
const menuButtonIcon = document.querySelector('#hamburger-menu_icon');

const navMenu = document.querySelector('.nav_menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('mobile_menu');
    if (menuButtonIcon.className === 'open') {
        menuButtonIcon.classList.toggle('open');
        menuButtonIcon.innerHTML = '<i class="fa fa-times"></i>';
    } else {
        menuButtonIcon.classList.toggle('open');
        menuButtonIcon.innerHTML = '<i class="fa fa-bars"></i>';
    }
    console.log('clicked')
});

// const menu_button = document.querySelector("#Menu_button");
// const mobile_nav = document.querySelector("#Mobile_nav");
// menu_button.addEventListener("click", function () {
//
//     if (mobile_nav.className === '') {
//         mobile_nav.className = 'mobile_menu';
//         menu_button.innerHTML = '<i class="fa fa-times"></i>';
//     } else {
//         mobile_nav.className = '';
//         menu_button.innerHTML = '<i class="fa fa-bars"></i>';
//     }
// })
