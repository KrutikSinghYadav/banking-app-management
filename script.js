function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
  
    if (!username || !password) {
      error.textContent = "Please enter both username and password.";
      return;
    }
  
    if (username === "admin" && password === "1234") {
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Invalid credentials!";
    }
  }
  