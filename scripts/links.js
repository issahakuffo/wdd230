const baseURL = 'https://issahakuffo.github.io/wdd230/';
const linksURL = 'https://issahakuffo.github.io/wdd230/data/links.json'; // Fixed quote error

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const linksList = document.querySelector('#links-container'); // Corrected ID selector

    // Clear existing links in the list (if needed)
    linksList.innerHTML = '';

    weeks.forEach(week => {
        // Create a list item for the week
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week + ': '; // Set the week text

        // Create links for the week's activities
        week.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url; // Set the URL for the anchor
            anchor.textContent = link.title; // Set the text for the anchor
            anchor.target = '_blank'; // Optional: open links in a new tab
            weekItem.appendChild(anchor); // Add the anchor to the week item

            // Add a space between links for readability
            weekItem.appendChild(document.createTextNode(' '));
        });

        linksList.appendChild(weekItem); // Add the week item to the links list
    });
}

getLinks();