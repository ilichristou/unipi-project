import React, {useEffect, useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BarChart1 from "./charts/BarChart1";
import BarChart from "./charts/BarChart";
import Doughnut from "./charts/Doughnut";
import ThreeBarChart from "./charts/ThreeBarChart";
import AreaChart from "./charts/AreaChart";
import {CssBaseline} from "@material-ui/core";
import NavigationBar from "../navBar/NavigationBar";
import Container from "@material-ui/core/Container";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import {useHistory} from "react-router-dom";
import Footer from "./footer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center', align: 'center',

            color: theme.palette.text.secondary,
        },
        root: {
            flexGrow: 1,
        },
    }),
);





    export default function FullWidthGrid() {
        const classes = useStyles();

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
            <Container maxWidth="70%" justify-content="center" align-items="center">
                <div className="App">
                    <NavigationBar/>
                    <div style={{width: '100%', align: 'center', padding: '10px'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    My Water Consumption
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <BarChart/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ThreeBarChart/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Doughnut/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <AreaChart/>
                            </Grid>
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <Paper className={classes.paper}>1/2 Size</Paper>*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Footer/>
                    </div>
                </div>
            </Container>
        )
            ;
    }

