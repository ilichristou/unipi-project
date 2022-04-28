import React from "react";
import { Redirect } from "react-router-dom";
import firebase from "../firebase";
import {  signOut } from "firebase/auth";
import { auth } from "../firebase";


/*function Logout() {

  const logout = async () => {
    await signOut(auth);
  };
  
  
  return (
    <div>
      <h1>Welcome</h1>
      <p>User Logged In:</p>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>
  );
};

export default Logout; */