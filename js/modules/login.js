import { CONFIG } from './config.js';
import { showAlert } from './alert.js';

document.querySelector('.register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    
    if (!username || !password) {
        showAlert("Please fill out all the fields.", "danger");
        return;
    }
    
    const data = { username, password };
    try {
        const response = await fetch(`${CONFIG.BACKEND_URL}/api/login_check`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          showAlert(`Login failed: ${errorData.message || 'Login failed'}`, "danger");
        } else {
            const return_data = await response.json();
            const token = return_data.token; 
  
            localStorage.setItem('jwt', token);
            showAlert('Login successful', "success");
            window.location.href = "/index.html";
        }
      } catch (error) {
        console.error('Error during login:', error);
        showAlert('Login failed, try again.', "danger");
      }
  
  (function() {
    const originalFetch = window.fetch;
  
    window.fetch = async (url, options = {}) => {
      const token = localStorage.getItem('jwt');
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        };
      }
  
      return originalFetch(url, options);
    };
  })();
});