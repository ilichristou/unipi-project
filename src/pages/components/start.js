import React, {useState} from "react";
import "./QuizMain.css";
import NavigationBar from "../../navBar/NavigationBar";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../../firebase";
import {
    NavBtn,
    NavBtnLink,
    NavLink,
    NavMenu,
} from "../../navBar/NavBarElements";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {CssBaseline} from "@material-ui/core";

function Start() {


    const [user, loading, error] = useAuthState(auth);

    const [firstName, setFirstName] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/joinQuiz");
    }, [user, loading]);


    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            firstName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");

        fetchUserName();
    }, [user, loading]);

    return (
        <>
            <div className="bg-image d-flex justify-content-center align-items-center" style={{
                // width: '100%',
                // height: '800px',

                height: '100vh',
                backgroundImage: `url("https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>
                <CssBaseline/>
                <NavigationBar/>
                <div className="StartPage">
                    <h1>Quiz</h1>

                    <div className="NavBtnLink">
                        <h5>Choose one quiz from the following categories:</h5>
                        <br/>
                        {/*<Button onClick={History} activeStyle>*/}
                        {/*    History*/}
                        {/*</Button>*/}
                        <br/>
                        <Link href="/history" activeStyle>
                            History
                        </Link>
                        <br/>
                        <Link href="/waterCycle" activeStyle>
                            Water Cycle
                        </Link>
                        <br/>
                        <Link href="/environment" activeStyle>
                            Εnvironment
                        </Link>
                        <br/>
                        <Link href="/devices" activeStyle>
                            Devices
                        </Link>
                        <br/>
                        <Link href="/energySaving" activeStyle>
                            Energy Saving
                        </Link>
                        <br/>
                        <Link href="/network" activeStyle>
                            Network
                        </Link>
                    </div>
                    {/* <button onClick={Quiz}>Start</button> */}
                </div>
            </div>
        </>
    );
}

export default Start;
