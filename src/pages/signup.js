// import React, {useEffect, useState} from 'react';
// import {Redirect} from "react-router-dom";
// import {
//     Grid,
//     Paper,
//     Avatar,
//     TextField,
//     Button,
//     Typography,
//     Link,
//     Divider,
//     Box,
//     useTheme,
//     useMediaQuery
// } from '@material-ui/core'
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutline';
// import FormControl from '@material-ui/core/FormControl';
// //import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "../firebase"
// //import {getFirestore, collection, doc, setDoc} from "firebase/firestore";
// //import firebase from "../firebase";
// //import {Email, StoreMallDirectoryRounded} from '@material-ui/icons';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import {useAuthState} from "react-firebase-hooks/auth";
// import {useHistory} from "react-router-dom";
// import {
//     auth,
//     registerWithEmailAndPassword
// } from '../firebase';
//
//
// const Signup = () => {
//
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [registerFirstName, setRegisterFirstName] = useState("");
//     const [registerLastName, setRegisterLastName] = useState("");
//     const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
//     const [registerAddress, setRegisterAddress] = useState("");
//     const [registerAP, setRegisterAP] = useState("");
//     const theme = useTheme();
//     const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
//
//     const history = useHistory();
//     const [user, loading, error] = useAuthState(auth);
//
//     useEffect(() => {
//         if (loading) return;
//         if (user) history.replace("/");
//     }, [user, loading]);
//
//     const register = () => {
//
//         registerWithEmailAndPassword(registerFirstName, registerLastName, registerPhoneNumber, registerAddress, registerAP, registerEmail, registerPassword);
//     };
//
//     // auth.onAuthStateChanged(currentUser => {
//     //     setUser(currentUser);
//     //
//     // });
//
//
//     // const register = async () => {
//     //
//     //     try {
//     //
//     //         await createUserWithEmailAndPassword(
//     //             auth,
//     //             registerEmail,
//     //             registerPassword,
//     //             registerFirstName,
//     //             registerLastName,
//     //             registerPhoneNumber,
//     //             registerAddress,
//     //             registerAP
//     //         ).then(cred => {
//     //             const user = cred.user;
//     //             console.log(user);
//     //             const userId = cred.user.uid;
//     //             console.log(cred.user);
//     //             console.log(cred.user.email);
//     //             console.log(userId);
//     //             //console.log(cred.user.displayName);
//     //             const writeUserData = async (userId, firstName, lastName, address, AP, phoneNumber, email) => {
//     //                 const db = getFirestore();
//     //                 await db.collection('users/' + userId).set({
//     //                     firstName: firstName,
//     //                     lastName: lastName,
//     //                     address: address,
//     //                     AP: AP,
//     //                     phoneNumber: phoneNumber,
//     //                     email: email
//     //                 });
//     //             }
//     //         })
//     //     } catch (error) {
//     //         console.log(error.message);
//     //
//     //     }
//     // }
//
//
//     // const logout = async () => {
//     //     await signOut(auth);
//     // };
//
//
//     const paperStyle = {padding: 30, height: '95vh', width: 400, margin: "20px auto"}
//     const headerStyle = {margin: 0}
//     const avatarStyle = {backgroundColor: '#0b5394'}
//     const marginTop = {marginTop: 15}
//
//
//     return (
//         <div className="add">
//             <Paper elevation={20} style={paperStyle}>
//                 <Grid align="center">
//                     <Avatar style={avatarStyle}>
//                         <AddCircleIcon>
//
//                         </AddCircleIcon>
//                     </Avatar>
//                     <h4>Sign Up</h4>
//                     <Typography variant="caption" fontSize="10px">Enter your credentials</Typography>
//                 </Grid>
//                 <br/>
//                 <Divider sx={{flexGrow: 1}} orientation="horizontal"/>
//                 <br/><br/>
//                 <form align="center">
//
//                     <label htmlFor="firstName"> First Name </label><br/>
//                     <input value={registerFirstName}
//                            onChange={(event) => {
//                                setRegisterFirstName(event.target.value);
//                            }}/><br/><br/>
//                     <label htmlFor="lastName"> Last Name </label><br/>
//                     <input value={registerLastName}
//                            onChange={(event) => {
//                                setRegisterLastName(event.target.value);
//                            }}/><br/><br/>
//                     <label htmlFor="address"> Home Address </label><br/>
//                     <input value={registerAddress}
//                            onChange={(event) => {
//                                setRegisterAddress(event.target.value);
//                            }}/><br/><br/>
//                     <label htmlFor="AP"> Provided Number </label><br/>
//                     <input value={registerAP}
//                            onChange={(event) => {
//                                setRegisterAP(event.target.value);
//                            }}/><br/><br/>
//                     <label htmlFor="phoneNumber"> Contact Number </label><br/>
//                     <input value={registerPhoneNumber}
//                            onChange={(event) => {
//                                setRegisterPhoneNumber(event.target.value);
//                            }}/><br/><br/>
//                     <label htmlFor="email"> Email </label><br/>
//                     <input value={registerEmail}
//                            onChange={(event) => {
//                                setRegisterEmail(event.target.value);
//                            }}/><br/><br/>
//                     <label htmlFor="password"> Password </label><br/>
//                     <input value={registerPassword}
//                            onChange={(event) => {
//                                setRegisterPassword(event.target.value);
//                            }}/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <FormControlLabel control={<Checkbox defaultChecked/>} label="I agree with the terms and conditions"
//                                       style={marginTop}/>
//                     <Button onClick={register} variant='contained' color='blue' style={marginTop}>Register </Button>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <Typography
//                         component={Link}
//                         href="/signin"
//                         variant="subtitle3"
//                         sx={{textDecoration: 'none'}}
//                         style={marginTop}
//
//                     >
//                         Already signed up?
//                     </Typography>
//                 </form>
//             </Paper>
//         </div>
//
//
//     );
//
//
// };
//
// export default Signup;

import * as React from 'react';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {  Link, useHistory } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword
} from '../firebase';
import "./signup1.css";
//import Typography from './modules/components/Typography';
import footer from './footer';
//import AppAppBar from './modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import Grid from '@material-ui/core/Grid';
//import { email, required } from './modules/form/validation';
import NavigationBar from '../navBar/NavigationBar';
import Typography from "@mui/material/Typography";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [AP, setAP] = useState("");

    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    const signup = () => {

        registerWithEmailAndPassword(firstName, lastName, address,
            AP, phoneNumber, email, password, );
    };

    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/signin");
    }, [user, loading]);

    return (

        <React.Fragment>
            {/*<NavigationBar />*/}
            <div className="register">
                <div className="register__container">
                    <Typography variant="h4" gutterBottom marked="center" align="center">
                        Sign Up
                    </Typography>
                    <Typography variant="body2" align="center">
                        <div>
                            <Link to="/SignIn"> Already have an account? </Link>
                        </div>
                    </Typography>

                    <br/>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <input
                                type="text"
                                className="register__textBox"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <input
                                type="text"
                                className="register__textBox"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"

                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <input
                                type="text"
                                className="register__textBox"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <input
                                type="text"
                                className="register__textBox"
                                value={AP}
                                onChange={(e) => setAP(e.target.value)}
                                placeholder="AP"

                            />
                        </Grid>
                    </Grid>
                    <input
                        type="number"
                        className="register__textBox"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.valueAsNumber)}
                        placeholder="Phone Number"

                    />
                    <input
                        type="text"
                        className="register__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"

                    />
                    <input
                        type="password"
                        className="register__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="register__btn" onClick={signup}>
                        Register
                    </button>

                </div>
            </div>

            <footer />
        </React.Fragment>
    );

}
export default withRoot(SignUp);