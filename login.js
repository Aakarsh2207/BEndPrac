function validateLogin() {
  // Simulate login credentials (in a real application, this would be checked against a server/database)
  var validUsername = "user";
  var validPassword = "password123";

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === validUsername && password === validPassword) {
    // If login is successful, redirect to home page
    window.location.href = "home.html";
    return false; // Prevent form submission
  } else {
    // Show error message if login fails
    errorMessage.textContent = "Invalid username or password. Please try again.";
    return false; // Prevent form submission
  }
}
