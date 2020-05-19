
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyArGaEhtWwTlZf8OI_HdxDJCF1-7LUCw_4",
    authDomain: "raja-project-plan.firebaseapp.com",
    databaseURL: "https://raja-project-plan.firebaseio.com",
    projectId: "raja-project-plan",
    storageBucket: "raja-project-plan.appspot.com",
    messagingSenderId: "58783503934",
    appId: "1:58783503934:web:2b9e5ce7525bb2d7b7236f",
    measurementId: "G-57RC83GC8K"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});


export default firebase;
