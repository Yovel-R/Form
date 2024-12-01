
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
 
  resetErrors();


  if (fullName.value.trim().length < 5) {
    nameError.classList.remove('d-none');
  }

  if (!email.value.includes('@') || email.value.trim() === '') {
    emailError.classList.remove('d-none');
  }

  if (phone.value === '123456789' || phone.value.trim().length !== 10 || isNaN(phone.value)) {
    phoneError.classList.remove('d-none');
  }


  const lowerCaseName = fullName.value.toLowerCase();
  const lowerCasePassword = password.value.toLowerCase();
  if (
    password.value.trim().length < 8 ||
    lowerCasePassword === 'password' ||
    lowerCasePassword === lowerCaseName
  ) {
    passwordError.classList.remove('d-none');
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.classList.remove('d-none');
  }


  if (
    !nameError.classList.contains('d-none') ||
    !emailError.classList.contains('d-none') ||
    !phoneError.classList.contains('d-none') ||
    !passwordError.classList.contains('d-none') ||
    !confirmPasswordError.classList.contains('d-none')
  ) {
    return;
  }

  alert('Form submitted successfully!');
}


function resetErrors() {
  nameError.classList.add('d-none');
  emailError.classList.add('d-none');
  phoneError.classList.add('d-none');
  passwordError.classList.add('d-none');
  confirmPasswordError.classList.add('d-none');
}
