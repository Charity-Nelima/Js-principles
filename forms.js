

const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
  
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
  
    if (usernameValue === "" || passwordValue === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Perform further validation or submit the form to the server
  });
  