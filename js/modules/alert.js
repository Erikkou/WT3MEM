export function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
  
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`);
    alert.innerHTML = `
      ${message}
      <button class="close-btn" onclick="this.parentElement.classList.remove('show')">&times;</button>
    `;

    alert.classList.add('show');
    alertContainer.appendChild(alert);

    setTimeout(() => {
      alert.classList.remove('show');
      setTimeout(() => alert.remove(), 5000); 
    }, 5000);
  };