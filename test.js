const firebaseConfig = {

    apiKey: "AIzaSyApP4ZgK3HrZbEKIxS0MO9xrFPhAR9FBUQ",
  
    authDomain: "personal-chef-mc.firebaseapp.com",
  
    projectId: "personal-chef-mc",
  
    storageBucket: "personal-chef-mc.appspot.com",
  
    messagingSenderId: "728607997260",
  
    appId: "1:728607997260:web:20fec5bd5cb14db9cce3e9",
  
    measurementId: "G-P3VXTS6EWN"
  
  };
  
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
  
   let formMessage = firebase.database().ref('register');
  
  //Form submission 
  //listen for submit event//
  document.getElementById('registrationform').addEventListener('submit', formSubmit);
  
  //Submit form
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;
  
    sendMessage(name, email, subject, message);
  
     //Show Alert Message
     document.querySelector('.alert').style.display = 'block';
  
     //Hide Alert Message After Seven Seconds
     setTimeout(function() {document.querySelector('.alert').style.display = 'none';
     }, 7000);  
  
     document.getElementById('registrationform').reset();
  
  }
  
  //Send Message to Firebase
  function sendMessage(name, email, s=subject, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      subject: subject,
      message: message
   
    });
}