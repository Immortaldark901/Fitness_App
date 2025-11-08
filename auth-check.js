// Auth Check - Redirect to signup if user is not authenticated
(function() {
  // Function to check if user is authenticated
  function checkAuth() {
    const user = localStorage.getItem('user');
    
    // Get current page name
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Pages that don't require authentication
    const publicPages = ['signup.html', 'signin.html', 'home.html', 'index.html', 'Aboutus.html', 'faq.html', ''];
    
    // Check if current page is public
    const isPublicPage = publicPages.some(page => 
      currentPage === page || currentPage === ''
    );
    
    // If not on a public page and user is not authenticated, redirect to signup
    if (!isPublicPage && !user) {
      console.log('User not authenticated, redirecting to signup page');
      window.location.href = 'signup.html';
      return false;
    }
    
    return true;
  }
  
  // Run auth check when page loads
  checkAuth();
})();
