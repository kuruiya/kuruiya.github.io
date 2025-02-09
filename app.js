document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  db.collection('Users').add({
    username,
    password,
    email
  }).then(() => {
    alert('Registration successful');
  }).catch((error) => {
    alert('Registration failed');
  });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  db.collection('Users').where('username', '==', username).where('password', '==', password).get()
    .then((snapshot) => {
      if (snapshot.empty) {
        alert('Login failed');
      } else {
        alert('Login successful');
      }
    }).catch((error) => {
      alert('Login failed');
    });
});
