// import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore, collection, getDocs, addDoc} from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {collection} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDFatx4GFtxzEGD49WHqSva2lKWDCN4IeM",
    authDomain: "projectacquattica1.firebaseapp.com",
    databaseURL: "https://projectacquattica1-default-rtdb.firebaseio.com",
    projectId: "projectacquattica1",
    storageBucket: "projectacquattica1.appspot.com",
    messagingSenderId: "785126543620",
    appId: "1:785126543620:web:7b358f80b32abaa1058051"
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


