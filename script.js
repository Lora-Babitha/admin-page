// Handle login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate login success
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.dashboard').style.display = 'block';
});

// Handle delete button clicks in the table
document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.querySelector('.table-section table tbody');

  tableBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      const confirmed = confirm('Are you sure you want to delete this row?');
      if (confirmed) {
        const row = e.target.closest('tr');
        row.remove();
      }
    }
  });
});
