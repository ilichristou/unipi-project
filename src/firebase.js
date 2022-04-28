// import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore, collection, getDocs, addDoc} from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {collection} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCkNhUF5yAZvbzxHKXjYSJIlLSKHZJ1Q7I",
    authDomain: "projectacquattica.firebaseapp.com",
    databaseURL: "https://projectacquattica-default-rtdb.firebaseio.com",
    projectId: "projectacquattica",
    storageBucket: "projectacquattica.appspot.com",
    messagingSenderId: "904988126621",
    appId: "1:904988126621:web:eae1a145fd993d2e73d374"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

// init firebase app
//initializeApp(firebaseConfig);

//export const auth = getAuth();


// init services
//const db = getFirestore();

// collection ref
//const colRef = collection(db, 'posts');

// get collection data
// getDocs(colRef).then((snapshot) => {
//     let posts = []
//     snapshot.docs.forEach((doc) => {
//         posts.push({...doc.data(), id: doc.id})
//     })
//     console.log(posts);
// })
//     .catch(err => {
//         console.log(err.message);
//     })

const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (firstName, lastName, address, AP, phoneNumber, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").doc(user.uid).set({
            uid: user.uid,
            firstName,
            lastName,
            address,
            AP,
            phoneNumber,
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
};

export {
    auth,
    db,
    logout,
    registerWithEmailAndPassword,
    signInWithEmailAndPassword,

};




// adding docs
// const addUserForm = document.querySelector('.add')
// addUserForm.addEventListener('submit', (e) =>{
//     e.preventDefault()
//
//     addDoc(colRef, {
//         firstName: addUserForm.firstName.value,
//         lastName: addUserForm.lastName.value,
//     })
//         .then(() =>{
//             addUserForm.reset()
//         })
// })


