const form = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');

// Simulated data for username availability check
const takenUsernames = ['john', 'jane', 'bob'];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.toLowerCase();

  if (takenUsernames.includes(username)) {
    usernameError.style.display = 'block';
  } else {
    usernameError.style.display = 'none';
    console.log('Form submitted successfully!');
    form.reset();
  }
});