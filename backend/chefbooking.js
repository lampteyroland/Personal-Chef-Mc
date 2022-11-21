// Unique Firebase Object 
var firebaseConfig = {
    apiKey: "AIzaSyDQ2Gi98p2Yh-Yp5V9XGBATuWrJZ16gVes",
    authDomain: "chefmcbookings.firebaseapp.com",
    projectId: "chefmcbookings",
    storageBucket: "chefmcbookings.appspot.com",
    messagingSenderId: "688762307696",
    appId: "1:688762307696:web:4a229eba80ee4bc6b720b5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()


//Acess the database collection
const db = firestore.collection("PersonalChefMcBookings")


//get submit form
let submitbutton = document.getElementById('submit')


//create event listener to allow form submission
submitbutton.addEventListener("click", (e) =>{
    //prevent default form submission behaviour
    e.preventDefault() 

    //get form values
    let fullname = document.getElementById('clientname').value
    let phonenuber = document.getElementById('phone').value
    let eaddress = document.getElementById('email').value
    let location = document.getElementById('address').value
    let service = document.getElementById('servicetype').value
    let date = document.getElementById('eventdate').value
    let propmenu = document.getElementById('menu').value
    let packages = document.getElementById('pricepackages').value
    let guests = document.getElementById('quantity').value
    let publicity = document.getElementById('awareness').value
    let charges = document.getElementById('cost').value


    //save data to firebase
    db.doc().set({
        ClientName: fullname,
        ClientNumber: phonenuber,
        EmailAddress: eaddress,
        EventLocation: location,
        ServiceType: service,
        EventDate: date,
        ProposedMenu: propmenu,
        PackageType: packages,
        GuestsNumber: guests,
        SocialMedia : publicity,
        ProposedCost: charges,

    }).then( ()=>{
        console.log("Data Saved")
    }).catch((error) => {
        console.log(error)

    })

  

    
})

 