function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    if (username === "admin" && password === "1234") {
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Invalid username or password.";
    }
  }
