// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate login success
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.dashboard').style.display = 'block';
});
