import { CONFIG } from './config.js';
import { showAlert } from './alert.js';

let userId; 

document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('jwt');
    if (!token) {
        window.location.href = "/views/login.html";
        return;
    }

  userId = JSON.parse(atob(token.split('.')[1])).sub; 
  
  fetchUserData();
  
  document.getElementById('preferences-form').addEventListener('submit', updatePreferences);
  document.getElementById('email-form').addEventListener('submit', updateEmail);
});

function fetchUserData() {
  fetch(`${CONFIG.BACKEND_URL}/api/player/${userId}/preferences`, { 
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("Preferences fetched from API:", data);

      const apiPreference = data.preferred_api || "";
      const apiDropdown = document.getElementById('play-character');
      const apiOption = Array.from(apiDropdown.options).find(option => option.value === apiPreference);
      if (apiOption) apiDropdown.value = apiPreference;

      const foundColor = data.color_found || "";
      const closedColor = data.color_closed || "";

      const foundColorDropdown = document.getElementById('color1');
      const foundColorOption = Array.from(foundColorDropdown.options).find(option => option.value === foundColor);
      if (foundColorOption) foundColorDropdown.value = foundColor;

      const closedColorDropdown = document.getElementById('color2');
      const closedColorOption = Array.from(closedColorDropdown.options).find(option => option.value === closedColor);
      if (closedColorOption) closedColorDropdown.value = closedColor;
      
    })
    .catch(error => console.error('Error fetching preferences:', error));

    fetch(`${CONFIG.BACKEND_URL}/api/player/${userId}/email`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
      })
        .then(response => response.json())
        .then(email => {
          document.getElementById('email-input').value = email;
        })
        .catch(error => console.error('Error fetching email:', error));
}

function updatePreferences(event) {
  event.preventDefault();

  const preferences = {
    api: document.getElementById('play-character').value,
    color_found: document.getElementById('color1').value,
    color_closed: document.getElementById('color2').value,
  };
  console.log("Payload being sent:", preferences);

  fetch(`${CONFIG.BACKEND_URL}/api/player/${userId}/preferences`, { 
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(preferences)
  })
    .then(response => {
      if (response.status === 204) {
        showAlert("Preferences have been changed.", "success");
      } else {
        showAlert("Error updating preferences.", "danger");
      }
    })
    .catch(error => console.error('Error updating preferences:', error));
}

function updateEmail(event) {
  event.preventDefault();

  const newEmail = document.getElementById('email-input').value;

  fetch(`${CONFIG.BACKEND_URL}/api/player/${userId}/email`, { 
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: newEmail })
  })
    .then(response => {
      if (response.status === 204) {
        showAlert('Email updated successfully!', "success");
      } else {
        showAlert('Error updating email.', "danger");
      }
    })
    .catch(error => console.error('Error updating email:', error));
}
