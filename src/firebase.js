import firebse from 'firebase/app';
import "firebase/auth";

const app= firebse.initializeApp({
    apiKey: "AIzaSyCs1CpYpk9G-60xWMPBqRELZkPvUxAuIBc",
    authDomain: "lab6-development.firebaseapp.com",
    projectId: "lab6-development",
    storageBucket: "lab6-development.appspot.com",
    messagingSenderId: "263798174881",
    appId: "1:263798174881:web:1fe407ad6d1b6482ef6ce0"
})

const auth =app.auth();
export {auth};
export default app;