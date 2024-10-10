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

const mode_switcher = document.querySelector("#Mode_switcher");
const html = document.querySelector("html");
const mode_type = document.querySelector("#mode_type");

/*mode_switcher.addEventListener("click", function () {

    if (mode_switcher.checked) {
        // alert('yes checked');
        html.className = 'dark';
        mode_type.innerHTML = 'Dark';
    } else {
        html.className = '';
        mode_type.innerHTML = 'Light';
    }
})

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
*/

// Select the element where the visit count will be displayed
const visitsDisplay = document.querySelector("#visits");

// Get the number of visits from localStorage (or set to 0 if not available)
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

// Check if this is the first visit or not, and update the display accordingly
if (numVisits > 0) {
    visitsDisplay.textContent = `You have visited this page ${numVisits} time(s).`;
} else {
    visitsDisplay.textContent = "This is your first visit. 🥳 Welcome!";
}

// Increment the visit count
numVisits++;

// Store the updated visit count in localStorage
localStorage.setItem("numVisits-ls", numVisits);