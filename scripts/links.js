const baseURL = 'https://issahakuffo.github.io/wdd230/';
const linksURL = 'https://issahakuffo.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }

  function displayLinks(weeks) {
    const linksContainer = document.getElementById("links-container");
    linksContainer.innerHTML = ""; // Clear existing content

    weeks.forEach(week => {
        const weekItem = document.createElement("li");
        weekItem.textContent = week.week + ": "; // Week number

        week.links.forEach(link => {
            const anchor = document.createElement("a");
            anchor.href = links.url;
            anchor.textContent = links.title;
            anchor.target = "_blank"; // Open link in a new tab
            anchor.style.marginRight = "10px"; // Add some space between links
            weekItem.appendChild(anchor); // Add link to week item
        });

        linksContainer.appendChild(weekItem); // Add week item to links container
    });
}

getLinks();