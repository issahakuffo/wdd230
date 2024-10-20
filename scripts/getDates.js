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


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '0da3a1a52462ed5fa5b20d9b03b45039'; // OpenWeatherMap API key
const lat = '5.56060'; // Latitude for Accra, Ghana
const lon = '-0.20981'; // Longitude for Accra, Ghana

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F </strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalizedDesc; extContent = `${desc}`; // Fill in: `${desc}`
}
apiFetch();