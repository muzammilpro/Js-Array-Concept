// Prompt user for input
var name = prompt("Enter your full name (first and last name):");
var email = prompt("Enter your email address:");
var emailCountryCode = prompt("Enter your email country code (should be 'PK'):");
var state = prompt("Enter your state (should be either Punjab or SVGAnimatedLength):");
var bio = prompt("Enter your bio (should be more than 50 characters):");
var cnic = prompt("Enter your CNIC (should be exactly 13 characters):");

// Validate user input
var isValid = true;
var errors = [];

if (!name.includes(" ")) {
  isValid = false;
  errors.push("Name should include both first and last name.");
}

if (!email.includes("@") || !email.includes(".")) {
  isValid = false;
  errors.push("Email should be valid.");
}

if (emailCountryCode !== "PK") {
  isValid = false;
  errors.push("Email country code should be 'PK'.");
}

if (state !== "Punjab" && state !== "SVGAnimatedLength") {
  isValid = false;
  errors.push("State should be either Punjab or SVGAnimatedLength.");
}

if (bio.length <= 50) {
  isValid = false;
  errors.push("Bio should be more than 50 characters.");
}

if (cnic.length !== 13) {
  isValid = false;
  errors.push("CNIC should be exactly 13 characters.");
}

// Display validation result
if (isValid) {
  console.log("Input is valid.");
} else {
  console.log("Input is invalid. Errors:");
  for (var i = 0; i < errors.length; i++) {
    console.log("- " + errors[i]);
  }
}
