document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar-placeholder').innerHTML = data;
          initRecipes();
      })
      .catch(error => console.error('Error loading navbar:', error));
});

