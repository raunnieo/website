// auth.js
const users = JSON.parse(localStorage.getItem('users')) || [];

function signUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (users.find(user => user.email === email)) {
        alert('Email already exists');
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful!');
    window.location.href = 'signin.html';
}

function signIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Sign in successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password');
    }
}

function signOut() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Check if user is signed in
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser && window.location.pathname !== '/signin.html' && window.location.pathname !== '/signup.html') {
        window.location.href = 'signin.html';
    }
}

// Call checkAuth on page load
document.addEventListener('DOMContentLoaded', checkAuth);