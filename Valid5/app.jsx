const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
 
  // Perform validation
  if (username === '') {
    alert('Please enter your username.');
    return;
  }
 
  if (password === '') {
    alert('Please enter your password.');
    return;
  }
 
  if (username === 'joshua' && password === '123') {
    // Create the link element
    const homeLink = document.createElement('a');
    homeLink.textContent = 'Go to Home Page';
    homeLink.href = 'home.html';
    
    // Add the link to the document body
    document.body.appendChild(homeLink);
    
    // Display a success message
    alert('Login successful!');
  } else {
    alert('Invalid username or password.');
  }
});
