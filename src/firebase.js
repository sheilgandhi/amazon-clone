import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCkyHHTmeDmlc_-sqAqtQz8y0w5X6rfwAk",
    authDomain: "clone-9906b.firebaseapp.com",
    databaseURL: "https://clone-9906b.firebaseio.com",
    projectId: "clone-9906b",
    storageBucket: "clone-9906b.appspot.com",
    messagingSenderId: "666499185923",
    appId: "1:666499185923:web:ce6078e545710fa7577d36",
    measurementId: "G-T4P5Y6V9G0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };