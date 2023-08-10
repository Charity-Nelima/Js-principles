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
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
  
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }
  
    // Your code to process valid form data
  });
  

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    fetch("your-server-url", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Handle server response
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });
  