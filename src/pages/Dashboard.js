import React, {useEffect, useState} from "react";
import NavigationBar from "../navBar/NavigationBar";
import {useHistory} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import Footer from './footer';
import Featured from "./tiles/Featured";
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";


function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [firstName, setFirstName] = useState("");

    const history = useHistory();

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
        <div className="App">
            <CssBaseline/>
            {/*<React.Fragment>*/}
            <NavigationBar/>
            <Container maxWidth="lg">
                <main>
                    Logged in as
                    <div>{firstName}</div>
                    <div>{user?.email}</div>
                    <Featured/>
                </main>
            </Container>
            <Footer/>
        </div>


    )
        ;


}

export default Dashboard;
