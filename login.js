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
