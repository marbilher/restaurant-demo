import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({   
    apiKey: "AIzaSyAWGxI-BgtUhQPcF1fxzPSPuG2LR9i_ghQ",
    authDomain: "restaurant-demo-fad4d.firebaseapp.com",
    databaseURL: "https://restaurant-demo-fad4d.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}

export default base;