import React, {useEffect, useState} from "react";
import NavigationBar from "../navBar/NavigationBar";
import {useHistory} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import Footer from './footer';
import Featured from "./tiles/Featured";
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ImageGrid from "./image-grid/imageGrid";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import MyCharts from "./tiles/MyCharts";
import SecondFeatured from "./tiles/SecondFeatured";
import ThirdFeatured1 from "./tiles/ThirdFeatured";
import AppDrawer from "../Menu/AppDrawer";
import Header from "../Components/Header/Header";
import NavBar from "../Components/NavBar";
import AppBar from "../Menu/AppBar";



function Dashboard() {
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
        <div className="App" style={{width: '100%', align: 'center', padding: '10px'}}>
            <CssBaseline/>
            {/*<React.Fragment>*/}
            {/*<NavigationBar/>*/}
            <NavBar/>
            <Header/>

            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={2} maxWidth="70%" justify-content="center" align-items="center">
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                Welcome!
                                <div>{firstName}</div>
                                <div>{user?.email}</div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Featured/>
                    <MyCharts/>
                    <br/>
                    <br/>
                    <SecondFeatured/>
                    <ThirdFeatured1/>
                    <br/>
                    <br/>
                </main>
            </Container>
            <Footer/>
        </div>


    )
        ;


}

export default Dashboard;
