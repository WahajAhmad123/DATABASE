// //  Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
//  import { getdatabase , ref ,set , onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// //  TODO: Add SDKs for Firebase products that you want to use
// //  https://firebase.google.com/docs/web/setup#available-libraries

// //  Your web app's Firebase configuration
// //  For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyDaYg-8kAWb4wg3IOTcjjYkwq-zBHVUGgU",
//    authDomain: "registration-64464.firebaseapp.com",
//    databaseURL: "https://registration-64464-default-rtdb.firebaseio.com",
//    projectId: "registration-64464",
//    storageBucket: "registration-64464.appspot.com",
//    messagingSenderId: "544286234826",
//    appId: "1:544286234826:web:4bb6e5b0a6bc4255d1fc33",
//    measurementId: "G-KK04TRHZTZ"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const Analytics = getAnalytics(app);
//  const database = getdatabase();


// var email = document.getElementById('email')
// var password = document.getElementById('password')
// var parent = document.getElementById('parent')
// window.save = function () {
//     var val1 = {
//         E_mail: email.value,
//         Password: password.value

//     };
//     console.log(val1)
//     val1.id = Math.random().toString().slice(2);
//     const taskRef = ref(database, `tasks/${val1.id}/`);
//     set(taskRef, val1);
// };
// function getData() {
//     var list = [];
//     const taskRef = ref(database, "tasks/");
//     onChildAdded(taskRef, function (g) {
//         list.push(g.val());
//         console.log(list);
//         parent.innerHTML = "";
//         for (var i = 0; i < list.length; i++) {
//             parent.innerHTML += `<li>${list[i].E_mail + list[i].Password}</li>`
//         }
//     })
// }
// getData();
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgEcKMJKw1MIDIOCd81yVkX0uPPsV0Wj4",
  authDomain: "registtation-form.firebaseapp.com",
  projectId: "registtation-form",
  storageBucket: "registtation-form.appspot.com",
  messagingSenderId: "553938946259",
  appId: "1:553938946259:web:03ef3c6285935388be6c26",
  measurementId: "G-BH8P19R2QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var fname = document.getElementById('fname')
var sname = document.getElementById('sname')
var email = document.getElementById('email')
var password = document.getElementById('password')
var num = document.getElementById('num')
var cnic = document.getElementById('cnic')
var address = document.getElementById('address')
var parent = document.getElementById('parent')
window.save = function () {
    var val1 = {
        first_Name:fname.value,
        second_Name:sname.value,
        E_mail: email.value,
        Password: password.value,
        Number:num.value,
        C_NIC:cnic.value,
        Address:address.value

    };
    console.log(val1)
    val1.id = Math.random().toString().slice(2);
    const taskRef = ref(database, `Form/${val1.id}/`);
    set(taskRef, val1);
};
function getData() {
    var list = [];
    const taskRef = ref(database, "Form/");
    onChildAdded(taskRef, function (g) {
        list.push(g.val());
        console.log(list);
        parent.innerHTML = "";
        for (var i = 0; i < list.length; i++) {
            parent.innerHTML += `<li>First Name: ${list[i].first_Name}</li><li>Second Name: ${list[i].second_Name}</li><li>E-mail: ${list[i].E_mail}</li> <li>Password: ${list[i].Password}</li> <li>Contact Number: ${list[i].Number}</li><li>C-NIC: ${list[i].C_NIC}</li><li>Address: ${list[i].Address}</li>`
        }
    })
}
getData();
