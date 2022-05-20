import React, {useEffect, useState} from 'react';
import Board from "../LeaderboardComponents/Board";
import '../LeaderboardComponents/style.css';
import {Grid} from "@material-ui/core";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import {useHistory} from "react-router-dom";
import NavigationBar from '../navBar/NavigationBar';
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";



function Leaderboard() {
    const [user, loading, error] = useAuthState(auth);
    const [firstName, setFirstName] = useState("");
    const classes = useStyles();

    const history = useHistory();

    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setFirstName(data.firstName);
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
        <div>
            <NavigationBar/>
            <div className="App" id='main'>
                <div style={{width: '50%', align: 'center', padding: '10px'}}>
                    <Grid container spacing={2}>
                        {/*<Grid item xs={12}>*/}
                        {/*    <Paper className={classes.paper}>*/}
                        {/*        LeaderBoard*/}
                        {/*    </Paper>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12}>
                            <Board/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );

}

export default Leaderboard;


// import React, {useState} from 'react';
// import {collection, getDocs} from 'firebase/firestore';
// import {db} from "../firebase";
//
// export default function LeaderBoard() {
//     const [score, setScore] = useState([])
//
//     function getScore() {
//         const scoreCollectionRef = collection(db, 'score')
//         getDocs(scoreCollectionRef)
//             .then(response => {})
//             .catch(error => console.log(error.massage))
//
//     }
//
//
//     return (
//         <div>
//             <h4>Leaderboard</h4>
//         </div>
//     )
//
// }