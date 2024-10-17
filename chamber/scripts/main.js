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


// Function to display message based on last visit
function displayVisitMessage() {
    const visitMessageElement = document.getElementById("visitMessage");

    // Get the current date and time
    const currentVisit = new Date().getTime();

    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        // First visit: Show welcome message
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the difference in time (in milliseconds) between the current and last visit
        const timeDiff = currentVisit - lastVisit;

        // Convert time difference from milliseconds to days (1 day = 86400000 ms)
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            // Less than a day since the last visit
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            // Exactly one day since the last visit
            visitMessageElement.textContent = "You last visited 1 day ago.";
        } else {
            // More than one day since the last visit
            visitMessageElement.textContent = `You last visited ${daysDiff} days ago.`;
        }
    }

    // Store the current visit date in localStorage for future visits
    localStorage.setItem("lastVisit", currentVisit);
}

// Call the function when the page loads
window.onload = displayVisitMessage;

window.onload = function() {
    const timestampField = document.getElementById('form-timestamp');
    const now = new Date();

    // Format the date and time as YYYY-MM-DD HH:MM:SS
    const formattedTimestamp = now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, '0') + "-" +
        String(now.getDate()).padStart(2, '0') + " " +
        String(now.getHours()).padStart(2, '0') + ":" +
        String(now.getMinutes()).padStart(2, '0') + ":" +
        String(now.getSeconds()).padStart(2, '0');

    timestampField.value = formattedTimestamp;
};