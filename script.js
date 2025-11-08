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
    accountBtn.textContent = `Hi, ${user.username || 'User'}`;
    const user = JSON.parse(localStorage.getItem('user'));
    const homeBtn = document.getElementById('home-btn');
    const homeLink = document.getElementById('home-link');
    const accountBtn = document.getElementById('account-btn');
    const accountOptions = document.getElementById('account-options');

    if (!accountBtn || !accountOptions) {
        console.error('Navbar elements not found.');
        return;
  }

  // User logged in
  if (user) {
    homeBtn.href = 'Dashboard.html';
    homeLink.href = 'Dashboard.html';
    accountBtn.textContent = `Hi, ${user.username || 'User'}`;
    accountOptions.innerHTML = `
      <a href="profile1.html">Profile</a>
      <a href="#" id="logoutBtn">Log Out</a>
    `;

    // Log out functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('user');
        localStorage.removeItem('profile');
        alert('You have been logged out successfully!');
        window.location.href = 'signin.html';
      }
    });
  }

  // User not logged in
  else {
    homeBtn.href = 'home.html';
    homeLink.href = 'home.html';
    accountBtn.textContent = 'Account';
    accountOptions.innerHTML = `
      <a href="signin.html">Sign In</a>
      <a href="signup.html">Sign Up</a>
    `;
  }

  // Ensure dropdowns respond properly (fix for fetch-loaded navbar)
  fixDropdownHover();
}

// Fix dropdown hover logic (for dynamically loaded navbar)
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
