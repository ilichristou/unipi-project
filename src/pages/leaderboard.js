import React, {useEffect, useState} from 'react';
import Board from "../components/Board";
import '../components/style.css';
import {Grid} from "@material-ui/core";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import {useHistory} from "react-router-dom";

function Leaderboard(){
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
        <div className="App" id='main'>
            <Grid container>
                <Grid>
                    <Board/>
                </Grid>
            </Grid>
        </div>
    );

}

export default Leaderboard;