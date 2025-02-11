function validateForm() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var comments = document.getElementById("comments").value;

  if (name == "" || phone == "" || age == "" || email == "" || address == "" || comments == "") {
    alert("All fields must be filled out.");
    return false;
  }

  // Additional validation logic could be added here (e.g., valid phone number, email format)

  return true;
}
