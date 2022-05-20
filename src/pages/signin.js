// import React, {useState} from 'react';
// import {Grid, Paper, Avatar, TextField, Button, Typography, Link, Divider} from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutline';
// import Checkbox from '@material-ui/core/Checkbox';
// import {Redirect} from "react-router-dom";
// import firebase from '../firebase';
// import {auth, signInWithEmailAndPassword} from "../firebase";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import {useHistory} from "react-router-dom";
// import {useAuthState, useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
// import {useEffect} from "react";
// import {NavBtn, NavBtnLink} from "../navBar/NavBarElements";
//
//
// function Signin() {
//
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//
//     const [user, loading, error] = useAuthState(auth);
//     const history = useHistory();
//
//     useEffect(() => {
//         if (loading) {
//             // maybe trigger a loading screen
//             return;
//         }
//         if (user) history.replace("/Dashboard");
//     }, [user, loading]);
//
//     // const login = async () => {
//     //     try {
//     //         const user = await signInWithEmailAndPassword(
//     //             auth,
//     //             loginEmail,
//     //             loginPassword
//     //         );
//     //         console.log(user);
//     //         {
//     //             user ? (
//     //                 <p>
//     //                     You are logged - <Link to="/about">HELLO WORLD</Link>
//     //                 </p>
//     //             ) : (
//     //                 <p>
//     //                     <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
//     //                 </p>
//     //             )
//     //         }
//     //     } catch (error) {
//     //         console.log(error.message);
//     //     }
//     // };
//
//
//     const paperStyle = {padding: 30, height: '50vh', width: 400, margin: "20px auto"}
//     const avatarStyle = {backgroundColor: '#0b5394'}
//     const marginTop = {marginTop: 15}
//     const btnstyle = {margin: '8px 0'}
//
//     return (
//
//
//         <div>
//             <Typography
//                 component="h2"
//                 variant="h5"
//                 color="inherit"
//                 align="left"
//                 noWrap
//
//             >
//                 ACQUATTICA.COM
//             </Typography>
//             <Paper elevation={20} style={paperStyle}>
//
//                 <Grid align="center">
//
//                     <Avatar style={avatarStyle}>
//
//                     </Avatar>
//                     <h4>Sign In</h4>
//                     <Typography variant="caption" fontSize="10px">Enter your credentials</Typography>
//                 </Grid>
//                 <br/>
//                 <Divider sx={{flexGrow: 1}} orientation="horizontal"/>
//                 <br/><br/>
//                 <form align="center">
//
//                     <input
//
//
//                         value={loginEmail}
//                         onChange={(e) => setLoginEmail(e.target.value)}
//                         placeholder="E-mail Address"
//                     />
//                     <input
//
//
//                         value={loginPassword}
//                         onChange={(e) => setLoginPassword(e.target.value)}
//                         placeholder="Password"
//                     />
//                     {/*<label for="email"> Email </label><br/>*/}
//                     {/*<input onChange={(event) => {*/}
//                     {/*    setLoginEmail(event.target.value);*/}
//                     {/*}}/><br/><br/>*/}
//                     {/*<label for="password"> Password </label><br/>*/}
//                     {/*<input onChange={(event) => {*/}
//                     {/*    setLoginPassword(event.target.value);*/}
//                     {/*}}/><br/>*/}
//                     <br/>
//                     <br/>
//                     {/*<Button onClick={Signin} variant='contained' color='blue' style={marginTop}>Login </Button>*/}
//                     <NavBtn>
//                         <NavBtnLink to='/Dashboard' onClick={() => signInWithEmailAndPassword(loginEmail, loginPassword)}>Log
//                             In</NavBtnLink>
//                     </NavBtn>
//                     {/*<button href="/home"*/}
//
//                     {/*        onClick={() => signInWithEmailAndPassword(loginEmail, loginPassword)}*/}
//                     {/*>*/}
//                     {/*    Login*/}
//                     {/*</button>*/}
//                     <br/>
//                     <br/>
//                     <Typography
//                         component={Link}
//                         href="/signup"
//                         variant="subtitle3"
//                         sx={{textDecoration: 'none'}}
//                         style={marginTop}
//
//                     >
//                         Not signed up yet?
//                     </Typography>
//                 </form>
//             </Paper>
//         </div>
//
//     );
// };
//
// export default Signin;

import * as React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import Typography from './modules/LeaderboardComponents/Typography';
// import AppFooter from './modules/views/AppFooter';
// import AppAppBar from './modules/views/AppAppBar';
import "./signin1.css";
import withRoot from '../modules/withRoot';
import NavigationBar from '../navBar/NavigationBar';
import Typography from "@mui/material/Typography";
import footer from './footer';



function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) history.replace("/Dashboard");
    }, [user, loading]);

    return (
        <React.Fragment>
            {/*<NavigationBar />*/}
            <div className="login">
                <div className="login__container">
                    <Typography variant="h4" gutterBottom marked="center" align="center">
                        Sign In
                    </Typography>
                    <Typography variant="body2" align="center">
                        <div>
                            <Link to="/signup"> Not a member yet? </Link>
                        </div>
                    </Typography>
                    <br/>
                    <input
                        type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        className="login__btn"
                        onClick={() => signInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>
                    <Typography align="center">
                        <div>
                            <Link to="/ForgotPassword">Forgot Password?</Link>
                        </div>
                    </Typography>
                </div>
            </div>
            <footer />
        </React.Fragment>
    );
}


export default withRoot(SignIn);
