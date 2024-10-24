const url = 'homepage-data/homepage.json';
const list = document.querySelector('#list');
const table = document.querySelector('.table');
const grid = document.querySelector('#grid');
const cards = document.querySelector('.cards');
const displayItems = document.querySelector('.displayItems');


async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const business = data['business'];

        business.forEach(business => {
            displayCards(business);
        });

        list.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            business.forEach(business => {
                displayTable(business);
            });
        });

        grid.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            business.forEach(business => {
                displayCards(business);
            });
        });
    }
}

getData(url);

function displayCards(business) {
    let card = document.createElement('section');

    //Business Image
    let image = document.createElement('img');
    image.setAttribute('src', business.image);
    image.setAttribute('alt', `${business.name} Logo`);
    card.appendChild(image);

    // Business Name
    let h3 = document.createElement('h3');
    h3.textContent = business.name;
    card.appendChild(h3);

    // Business Description
    let description = document.createElement('p');
    description.textContent = business.description;
    card.appendChild(description);

     // Business Details
     let details = document.createElement('p');
     details.textContent = business.details;
     card.appendChild(details);
 

    // Business Phone
    let phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);

    // Business Website
    let website = document.createElement('a');
    website.setAttribute('href', business.website);
    website.textContent = 'Website';
    card.appendChild(website);

    //Membership Level
    let membership = document.createElement('p');
    membership.textContent = business.membershipLevel;
    card.appendChild(membership);

    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);

}

function displayTable(business) {
    let tableRow = document.createElement('tr');

    // Business Name
    let name = document.createElement('td');
    name.textContent = business.name;
    tableRow.appendChild(name);


    // Business Description
    let description = document.createElement('td');
    description.textContent = business.description;
    tableRow.appendChild(description);

     // Business details
     let details = document.createElement('td');
     details.textContent = business.details;
     tableRow.appendChild(details);

    // Business Phone
    let phone = document.createElement('td');
    phone.textContent = business.phone;
    tableRow.appendChild(phone);

    // Business Website
    let website = document.createElement('td');
    website.innerHTML = `<a href="${business.website}">Website</a>`;
    tableRow.appendChild(website);

    // Membership Level
    let membership = document.createElement('td');
    membership.textContent = business.membershipLevel;
    tableRow.appendChild(membership);


    document.querySelector('table').appendChild(tableRow);
}

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '0da3a1a52462ed5fa5b20d9b03b45039'; // OpenWeatherMap API key
const lat = '5.56060'; // Latitude for Accra, Ghana
const lon = '-0.20981'; // Longitude for Accra, Ghana

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
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