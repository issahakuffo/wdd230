const baseURL = 'https://issahakuffo.github.io/wdd230/';
const linksURL = 'https://issahakuffo.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    // Get the container where the links will be displayed
    const linksContainer = document.getElementById('links-container');


    linksContainer.innerHTML = '';

    // Loop through each week in the data
    data.weeks.forEach(week => {
        // Create a list item for the week
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week + ': '; // Add the week title

        // Loop through each link in the week's links array
        week.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url; 
            anchor.textContent = link.title;
            anchor.target = '_blank'; 
            anchor.rel = 'noopener noreferrer'; 

            // Append the anchor to the week item
            weekItem.appendChild(anchor);
            weekItem.appendChild(document.createTextNode(' ')); // Add a space between links
        });

        // Append the week item to the links container
        linksContainer.appendChild(weekItem);
    });
}

getLinks();