const copyright_year = document.getElementById("year");

const dateY = new Date().getFullYear();

copyright_year.innerHTML = dateY;


const last_modified = document.getElementById("lastModified");

const dateTime = new Date().toLocaleString();;

last_modified.innerHTML = dateTime;


const menu_button = document.querySelector("#Menu_button");
const mobile_nav = document.querySelector("#Mobile_nav");
menu_button.addEventListener("click", function () {

    if (mobile_nav.className === '') {
        mobile_nav.className = 'mobile_menu';
        menu_button.innerHTML = '<i class="fa fa-times"></i>';
    } else {
        mobile_nav.className = '';
        menu_button.innerHTML = '<i class="fa fa-bars"></i>';
    }
})