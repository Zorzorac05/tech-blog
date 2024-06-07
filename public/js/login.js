const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(username, password);
  
    //if a username and password are given calls log in route
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Could not sign in');
        console.log(username, password);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(username, password);

    //if a username and password are given calls sign up route
    if (username && password) {
      const response = await fetch('/api/users/signUp', {
        method: 'POST',
        body: JSON.stringify({ name: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Could not sign up');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);