document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Your code to handle form submission
  });

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target); // event.target refers to the form
    const name = formData.get("name");
    const email = formData.get("email");
  
    // Your code to handle form data
  });
  