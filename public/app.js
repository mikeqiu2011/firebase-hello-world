import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js'
import {getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'
// import {collection, getFirestore, getDocs} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBD47yIrv6HpBErf33rs4ybbVWlGnd0l0g",
    authDomain: "my-firebase-project-15c64.firebaseapp.com",
    projectId: "my-firebase-project-15c64",
    storageBucket: "my-firebase-project-15c64.appspot.com",
    messagingSenderId: "8513114374",
    appId: "1:8513114374:web:0cc2d2e6d881a18a854e87",
    measurementId: "G-BTECPEV99H"
  };

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in!');
    }else{
        console.log('No user');
    }
})