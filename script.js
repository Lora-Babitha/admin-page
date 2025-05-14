// Handle login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.dashboard').style.display = 'block';
});

let rowToDelete = null;

// Open popup on delete icon click
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-trash-alt')) {
    rowToDelete = e.target.closest('tr');
    document.getElementById('popupOverlay').style.display = 'flex';
  }
});

// Confirm deletion
document.getElementById('confirmDelete').addEventListener('click', function () {
  if (rowToDelete) {
    rowToDelete.remove();
    rowToDelete = null;
  }
  document.getElementById('popupOverlay').style.display = 'none';
});

// Cancel deletion
document.getElementById('cancelDelete').addEventListener('click', function () {
  rowToDelete = null;
  document.getElementById('popupOverlay').style.display = 'none';
});
