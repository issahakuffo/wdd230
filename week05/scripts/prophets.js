// Define the URL for the JSON data
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// Select the #cards container from the DOM
const cardsContainer = document.querySelector('#cards');

// Function to fetch prophet data from the URL
async function getProphetData() {
    try {
        const response = await fetch(url); // Fetch data from the URL
        const data = await response.json(); // Parse the JSON data
        displayProphets(data.prophets); // Call displayProphets function to render the cards
    } catch (error) {
        console.error("Error fetching prophet data:", error); // Log error if fetch fails
    }
}

// Function to display the prophets data in the DOM
const displayProphets = (prophets) => {
    // Loop through each prophet in the array
    prophets.forEach((prophet) => {
        // Create elements to add to the #cards container
        let card = document.createElement('section'); // Create a section for each card
        let fullName = document.createElement('h2'); // Create an h2 for the prophet's name
        let portrait = document.createElement('img'); // Create an img for the prophet's portrait

        // Build the h2 content with the prophet's full name
        fullName.textContent = `${prophet.firstName} ${prophet.lastName}`; // Set the text to the full name

        // Set up the image element with attributes
        portrait.setAttribute('src', prophet.imageurl); // Set the src to the prophet's image URL
        portrait.setAttribute('alt', `Portrait of ${prophet.firstName} ${prophet.lastName}`); // Set alt text for accessibility
        portrait.setAttribute('loading', 'lazy'); // Use lazy loading for better performance
        portrait.setAttribute('width', '340'); // Set width of the image
        portrait.setAttribute('height', '440'); // Set height of the image

        // Append the h2 (name) and img (portrait) to the section (card)
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append the section (card) to the main #cards container
        cardsContainer.appendChild(card);
    });
}

// Call the getProphetData function to fetch and display the data
getProphetData();