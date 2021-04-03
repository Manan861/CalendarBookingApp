import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBiRbdW_5L07PUcWgE6vJqASsQ6j1HCQIQ",
    authDomain: "book-santa-app-d0368.firebaseapp.com",
    projectId: "book-santa-app-d0368",
    storageBucket: "book-santa-app-d0368.appspot.com",
    messagingSenderId: "694148196070",
    appId: "1:694148196070:web:4269869fe370262d3fbd27",
    measurementId: "G-XJT2HNL84N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
