document.addEventListener('DOMContentLoaded', async () => {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (!navbarPlaceholder) return;
  try {
    const response = await fetch('navbar.html');
    const html = await response.text();
    navbarPlaceholder.innerHTML = html;
    // Wait a bit for DOM to render before initializing
    setTimeout(initializeNavbar, 50);
  } catch (error) {
    console.error('Error loading navbar:', error);
  }
});

function initializeNavbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const homeBtn = document.getElementById('home-btn');
  const homeLink = document.getElementById('home-link');
  const dashboardLink = document.getElementById('dashboard-link');
  const accountBtn = document.getElementById('account-btn');
  const accountOptions = document.getElementById('account-options');
  if (!accountBtn || !accountOptions) {
    // Navbar not yet loaded
    return;
  }

  // User logged in
  if (user) {
    // Show dashboard link
    if (dashboardLink) dashboardLink.style.display = '';
    // Redirect Home button to Dashboard
    if (homeBtn) homeBtn.href = 'Dashboard.html';
    if (homeLink) homeLink.href = 'Dashboard.html';
    // Change account button to username
    accountBtn.textContent = user.username || 'Profile';
    accountOptions.innerHTML = `
      <a href="profile1.html">Profile</a>
      <a href="#" id="logoutBtn">Log Out</a>
    `;
    // Log out functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('user');
        localStorage.removeItem('profile');
        window.location.href = 'home.html';
      }
    });
  } else {
    // Hide dashboard link
    if (dashboardLink) dashboardLink.style.display = 'none';
    // Normal Home links
    if (homeBtn) homeBtn.href = 'home.html';
    if (homeLink) homeLink.href = 'home.html';
    // Account dropdown for guests
    accountBtn.textContent = 'Account';
    accountOptions.innerHTML = `
      <a href="signin.html">Sign In</a>
      <a href="signup.html">Sign Up</a>
    `;
  }
  // Enable dropdown functionality for dynamically loaded HTML
  fixDropdownHover();
}

// Fix dropdowns for dynamically loaded navbar
function fixDropdownHover() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const content = dropdown.querySelector('.dropdown-content');
    if (!content) return;
    dropdown.addEventListener('mouseenter', () => {
      content.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
      content.style.display = 'none';
    });
  });
}
