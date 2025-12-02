const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");

// LOGIN CLICK
loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  pageTitle.textContent = "Welcome Back!";
  pageSubtitle.textContent = "Enter your details to access your account";

  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

// SIGNUP CLICK
signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  pageTitle.textContent = "Join TaskMaster";
  pageSubtitle.textContent = "Create an account to boost your productivity";

  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

// =====================
// FORM VALIDATION & STORAGE
// =====================

// Signup Form
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("signupName");
  const email = document.getElementById("signupEmail");
  const password = document.getElementById("signupPassword");

  clearErrors();
  let valid = true;

  if (name.value.trim() === "") {
    showError(name, "Fullname is required");
    valid = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Enter a valid email address");
    valid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  }

  if (!valid) return;

  // SAVE TO LOCAL STORAGE
  const user = {
    name: name.value.trim(),
    email: email.value.trim(),
    password: password.value
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Redirecting to login...");
  loginTab.click(); // switch tab automatically
});

// Login form
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signinEmail");
  const password = document.getElementById("signinPassword");

  clearErrors();
  let valid = true;

  if (!validateEmail(email.value)) {
    showError(email, "Enter a valid email");
    valid = false;
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    valid = false;
  }

  if (!valid) return;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

  if (savedUser.email === email.value && savedUser.password === password.value) {
    alert("Login successful! Redirecting...");

    setTimeout(() => {
        window.location.href = "/home.html";
      }, 1500);
  } else {
    showError(password, "Incorrect email or password");
  }
});

// Email regex
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function showError(input, message) {
    const parent = input.closest(".input-section");
    const error = parent.querySelector(".error");
  
    if (!error) {
      console.error("Missing <p class='error'> inside this input-section", parent);
      return;
    }
  
    parent.classList.add("input-error");
    error.textContent = message;
  }  
  function clearErrors() {
    document.querySelectorAll(".error").forEach(err => err.innerHTML = "");
    document.querySelectorAll(".input-error").forEach(div => div.classList.remove("input-error"));
  }
  