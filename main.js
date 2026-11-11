let form = document.getElementById("form");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let signup = document.getElementById("signup");
let success = document.getElementById("success");
let confirmedEmail = document.getElementById("confirmed-email");
let dismissBtn = document.getElementById("dismiss");

// Simple "name@domain.tld" check
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(message) {
  emailError.textContent = message;
  emailInput.setAttribute("aria-invalid", "true");
}

function clearError() {
  emailError.textContent = "";
  emailInput.removeAttribute("aria-invalid");
}

// Validation runs on submit only
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!EMAIL_PATTERN.test(email)) {
    showError("Valid email required");
    emailInput.focus();
    return;
  }

  clearError();
  confirmedEmail.textContent = email;
  signup.hidden = true;
  success.hidden = false;
  dismissBtn.focus();
});

dismissBtn.addEventListener("click", () => {
  form.reset();
  clearError();
  success.hidden = true;
  signup.hidden = false;
  emailInput.focus();
});
