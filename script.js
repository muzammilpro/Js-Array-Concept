function checkPasswordStrength() {
    var password = document.getElementById("passwordInput").value;

    // Define the criteria for password strength
    var minLength = 8;
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);

    // Calculate the strength score based on the criteria
    var strengthScore = 0;
    if (password.length >= minLength) {
        strengthScore += 1;
    }
    if (hasSpecialChar) {
        strengthScore += 1;
    }
    if (hasUpperCase) {
        strengthScore += 1;
    }
    if (hasLowerCase) {
        strengthScore += 1;
    }
    if (hasNumber) {
        strengthScore += 1;
    }

    // Determine the strength rating based on the strength score
    var strengthRating;
    switch (strengthScore) {
        case 0:
            strengthRating = "Weak";
            break;
        case 1:
            strengthRating = "Medium";
            break;
        case 2:
            strengthRating = "Strong";
            break;
        case 3:
        case 4:
        case 5:
            strengthRating = "Very Strong";
            break;
    }

    // Display the strength rating on the webpage
    document.getElementById("strengthResult").innerHTML = "Strength: " + strengthRating;
}