import * as React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import Typography from './modules/components/Typography';
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
            <NavigationBar />
            <div className="login">
                <div className="login__container">
                    <Typography variant="h4" gutterBottom marked="center" align="center">
                        Sign In
                    </Typography>
                    <Typography variant="body2" align="center">
                        <div>
                            <Link to="/signup1"> Not a member yet? </Link>
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