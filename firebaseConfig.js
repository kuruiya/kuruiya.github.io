<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-K-9wplH4VHvPf6txiezTgG-SA3rAt74",
    authDomain: "kuruiya-83797.firebaseapp.com",
    databaseURL: "https://kuruiya-83797-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kuruiya-83797",
    storageBucket: "kuruiya-83797.firebasestorage.app",
    messagingSenderId: "275690308009",
    appId: "1:275690308009:web:d092025dc984a9cf9f84b8",
    measurementId: "G-V0RE3Q1MY1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
