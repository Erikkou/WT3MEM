import { CONFIG } from './modules/config.js';

document.addEventListener('DOMContentLoaded', () => {
  const loadComponent = (id, file) => {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;

        const token = localStorage.getItem('jwt');  
        console.log('Token:', token); 

        if (token) {
          const decodedToken = JSON.parse(atob(token.split('.')[1])); 
          const expTime = decodedToken.exp * 1000;
          const currentTime = Date.now();
          console.log('Tokentime:', expTime);
          console.log('Currenttime:', currentTime);

          if (currentTime > expTime) {
            localStorage.removeItem('jwt'); 
            const alertContainer = document.getElementById('alert-container');
            const alert = document.createElement('div');
            alert.classList.add('alert', 'alert-danger', 'show');
            alert.innerHTML = 'Your session has expired. Please log in again.';

            alertContainer.appendChild(alert);

            setTimeout(() => {
            localStorage.removeItem('jwt'); 
            window.location.href = "/views/login.html";  
            }, 5000);
      
            setTimeout(() => alert.classList.remove('show'), 5000);  
          }
          
          document.getElementById('accountLink').style.display = 'inline-block';
          document.getElementById('logoutLink').style.display = 'inline-block';
          document.getElementById('loginLink').style.display = 'none';
          document.getElementById('registerLink').style.display = 'none';
        } else {
          document.getElementById('accountLink').style.display = 'none';
          document.getElementById('logoutLink').style.display = 'none';
          document.getElementById('loginLink').style.display = 'inline-block';
          document.getElementById('registerLink').style.display = 'inline-block';
        }

        document.getElementById('logoutLink').addEventListener('click', function() {
          localStorage.removeItem('jwt'); 
          window.location.href = "/index.html";
        });

      })
      .catch(error => console.error(`Error loading ${file}:`, error));


    };

  loadComponent('header', `${CONFIG.BASE_URL}/components/header.html`);
  
});
