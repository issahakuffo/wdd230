const rangeSlider = document.getElementById('page-rating');
const rangeValue = document.getElementById('rangevalue');

// Update the div with the current range value
rangeSlider.addEventListener('input', function () {
    rangeValue.textContent = rangeSlider.value;
});

// Optional: Set the initial value
rangeValue.textContent = rangeSlider.value;


// Check if the password and confirm password match
function checkMatchingPassword() {
    const password = document.getElementById('user-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordMessage = document.getElementById('password-message');

    if (password !== confirmPassword) {
        passwordMessage.textContent = "Passwords do not match!";
    } else {
        passwordMessage.textContent = "";
    }
}

// Form submission handler to check validations
document.getElementById('user-form').addEventListener('submit', function (event) {
    const emailField = document.getElementById('email');
    const password = document.getElementById('user-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const emailMessage = document.getElementById('email-message');
    let isValid = true;

    // Email validation (BYU email)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    if (!emailPattern.test(emailField.value)) {
        emailMessage.textContent = "Please enter a valid BYU-Idaho email address.";
        isValid = false;
    } else {
        emailMessage.textContent = "";
    }

    // Password match validation
    if (password !== confirmPassword) {
        document.getElementById('password-message').textContent = "Passwords do not match!";
        isValid = false;
    } else {
        document.getElementById('password-message').textContent = "";
    }

    // If validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});



