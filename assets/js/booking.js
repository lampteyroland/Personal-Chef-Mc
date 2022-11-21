// const firebaseConfig = {
//     apiKey: "AIzaSyB1TzceMFkU8mJrujCJ9-yXlShuuigscnw",
//     authDomain: "personal-chef-booking.firebaseapp.com",
//     databaseURL: "https://personal-chef-booking-default-rtdb.firebaseio.com",
//     projectId: "personal-chef-booking",
//     storageBucket: "personal-chef-booking.appspot.com",
//     messagingSenderId: "656970531113",
//     appId: "1:656970531113:web:d93cb642446c9854bf7738"
// };

// // initialize firebase
// firebase.initializeApp(firebaseConfig);

// // reference your database
// var bookingFormDB = firebase.database().ref("bookingForm");

// document.getElementById("book-a-table").addEventListener("submit", submitForm);

// function submitBookingForm(e) {
//   e.preventDefault();

 
//   var fname = getElementVal("fname");
//   var email = getElementVal("email");
//   var phone = getElementVal("phone");
//   var date = getElementVal("date");
//   var time = getElementVal("time");
//   var people = getElementVal("people");
//   var location = getElementVal("location");
// //   var services = getElementVal("services");

  

//   bookingInfo( fname, email, phone, date, time, people,location);

//   console.log(fname, email, phone, date, time, people,location)

// //   //   enable alert
// //   document.querySelector(".alert").style.display = "block";

// //   //   remove the alert
// //   setTimeout(() => {
// //     document.querySelector(".alert").style.display = "none";
// //   }, 2000);

// //   //   reset the form
// //   document.getElementById("contactForm").reset();
// }

// const bookingInfo = (fname,email,phone,date,time,people,location) => {
//   var newBookingInfo= contactFormDB.push();

//   newBookingInfo.set({
//    fname:fname,
//    email:email,
//    phone:phone,
//    date:date,
//    time:time,
//    people:people,
//    location:location,

   
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };