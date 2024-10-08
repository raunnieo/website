// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyMYR6gCBTB7YhEOGZsU578gMoUabxmIE",
  authDomain: "sehpaathi-64cef.firebaseapp.com",
  projectId: "sehpaathi-64cef",
  storageBucket: "sehpaathi-64cef.appspot.com",
  messagingSenderId: "1069403029126",
  appId: "1:1069403029126:web:a5db2f0440d5195a0c5b07",
  measurementId: "G-QFD4Y2Q8PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

// Get page-specific elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");
const googleSignInButton = document.getElementById("google-login-btn");
const errorMessage = document.getElementById("error-message");

// Determine if we're on the sign-in or sign-up page
const isSignInPage = window.location.pathname.includes("signin.html");

// Set up the form title and button text
const formTitle = document.getElementById("form-title");
if (formTitle) {
  formTitle.textContent = isSignInPage ? "Sign In" : "Sign Up";
}
if (submitButton) {
  submitButton.textContent = isSignInPage ? "Sign In" : "Sign Up";
}

// Function to handle email/password sign in
function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    errorMessage.textContent = "";

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            errorMessage.textContent = "Successfully signed in!";
            errorMessage.style.color = "green";
            console.log("User signed in:", userCredential.user);
            window.location.href = "dashboard_in.html"; 
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
}

// Function to handle email/password sign up
function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    errorMessage.textContent = "";

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            errorMessage.textContent = "Account created successfully!";
            errorMessage.style.color = "green";
            console.log("User signed up:", userCredential.user);
            window.location.href = "dashboard_in.html";
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
}

// Function to handle Google sign in
function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in with Google:", user);
      window.location.href = "dashboard_in.html";
    })
    .catch((error) => {
      console.error("Google sign in error:", error);
      if (errorMessage) errorMessage.textContent = error.message;
    });
}

// Set up event listeners
if (submitButton) {
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (isSignInPage) {
            signIn();  // Removed email and password arguments
        } else {
            signUp();  // Removed email and password arguments
        }
    });
}

if (googleSignInButton) {
  googleSignInButton.addEventListener("click", signInWithGoogle);
}