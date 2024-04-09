const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Add the hardcoded admin user
const users = JSON.parse(localStorage.getItem('users')) || [
  {
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin',
    isAdmin: true,
  },
];
localStorage.setItem('users', JSON.stringify(users));

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('register-username').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value.trim();

  if (username && email && password) {
    users.push({ username, email, password, isAdmin: false });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');

    document.getElementById('register-username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';

    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    alert('Please fill in all fields');
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      if (user.isAdmin) {
        // Redirect to the admin page
        window.location.href = 'dashboard.html';
      } else {
        // Redirect to the home page
        window.location.href = 'eHome.html';
      }
    } else {
      // Show error message
      alert('Invalid username or password');
    }
  } else {
    // Show error message
    alert('Please fill in all fields');
  }
});