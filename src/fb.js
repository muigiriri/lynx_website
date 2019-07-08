import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCD8olcZrYea7jQATVX19ntkwSbzd8JHxs",
    authDomain: "portfolio-kanyi.firebaseapp.com",
    databaseURL: "https://portfolio-kanyi.firebaseio.com",
    projectId: "portfolio-kanyi",
    storageBucket: "portfolio-kanyi.appspot.com",
    messagingSenderId: "152259001384",
    appId: "1:152259001384:web:f03f54fe02d328b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;