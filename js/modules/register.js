import { CONFIG } from './config.js';
import { showAlert } from './alert.js';

document.querySelector('.register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
      showAlert("Please fill out all the fields.", "danger");
      return;
    }
  
    const data = { username, email, password };
  
    try {
      const response = await fetch(`${CONFIG.BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        showAlert(`Registration failed: ${errorData.message || 'Registration failed'}`, "danger");
      } else {
        showAlert('Registration successful', "success");
        window.location.href = "/views/login.html";
      }
    } catch (error) {
      console.error('Error during registration:', error);
      showAlert('Registration failed, try again.', "danger");
    }
  });
  