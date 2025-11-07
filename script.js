// Updated script.js

// We need to import the Supabase client. This requires changing
// how we load scripts in all HTML files.
import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', async () => {
    
    // *** FIX IS HERE ***
    // First, find the placeholder element
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    // Only run the navbar logic IF the placeholder element actually exists on this page
    if (navbarPlaceholder) {
        try {
            // 1. Load Navbar
            const response = await fetch('navbar.html');
            const data = await response.text();
            // Use the variable we already found
            navbarPlaceholder.innerHTML = data;

            // 2. Check Supabase Auth State
            // All the auth logic now lives inside this 'if' block
            const { data: { session } } = await supabase.auth.getSession();

            if (session) {
                // User IS logged in
                console.log("User is logged in:", session.user.email);
                updateNavbarForLoggedInUser();
            } else {
                // User IS NOT logged in
                console.log("User is not logged in.");
                updateNavbarForLoggedOutUser();
            }

        } catch (error) {
            console.error('Error in global script:', error);
        }
    }
    // *** END OF FIX ***
});

function updateNavbarForLoggedInUser() {
    // Show protected links
    showNavElement('nav-nutrition');
    showNavElement('nav-fitness');
    showNavElement('nav-recipes');
    showNavElement('nav-profile-links');

    // Set Account links
    const accountLinks = document.getElementById('nav-account-links');
    if (accountLinks) {
        accountLinks.innerHTML = `
            <button class="dropbtn">Account</button>
            <div class="dropdown-content">
                <a href="profile.html">Profile</a>
                <a href="#" id="logout-button">Sign Out</a>
            </div>
        `;
        
        // Add event listener for the new logout button
        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', async (e) => {
                e.preventDefault();
                const { error } = await supabase.auth.signOut();
                if (error) {
                    console.error('Error logging out:', error.message);
                } else {
                    // Redirect to home page after logout
                    window.location.href = 'home.html';
                }
            });
        }
    }
}

function updateNavbarForLoggedOutUser() {
    // Hide protected links
    hideNavElement('nav-nutrition');
    hideNavElement('nav-fitness');
    hideNavElement('nav-recipes');
    hideNavElement('nav-profile-links');

    // Set Account links
    const accountLinks = document.getElementById('nav-account-links');
    if (accountLinks) {
        accountLinks.innerHTML = `
            <button class="dropbtn">Account</button>
            <div class="dropdown-content">
                <a href="signin.html">Sign In</a>
                <a href="signup.html">Sign Up</a>
            </div>
        `;
    }
}

// Helper functions to show/hide elements
function showNavElement(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

function hideNavElement(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
}