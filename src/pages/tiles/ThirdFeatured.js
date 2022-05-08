// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import BarChart from "../charts/BarChart";
// import ThreeBarChart from "../charts/ThreeBarChart";
// import Doughnut from "../charts/Doughnut";
// import AreaChart from "../charts/AreaChart";
// import Container from "@material-ui/core/Container";
// import CardPreview from "./CardPreview";
//
// const useStyles1 = makeStyles((theme) => ({
//     thirdFeatured1: {
//         height: 150,
//         backgroundColor: theme.palette.grey[800],
//         color: theme.palette.common.white,
//         marginBottom: theme.spacing(4),
//         backgroundImage: "url(https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//     },
//     thirdFeaturedContent1: {
//         position: "relative",
//         padding: theme.spacing(3),
//         [theme.breakpoints.up("md")]: {
//             padding: theme.spacing(6),
//             paddingRight: 0,
//         },
//     },
// }));
//
// export default function ThirdFeatured1() {
//     const classes = useStyles1();
//
//     return (
//         // <Grid container className={classes.thirdFeatured1}>
//         //     <Grid item xs={2} className={classes.thirdFeaturedContent1}>
//         //         <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
//         //             Save Water Energy
//         //         </Typography>
//         //         <Typography variant="body1" color="inherit" paragraph align='left'>
//         //             Acquattica becomes a member in Ecologica Organization.
//         //         </Typography>
//         //     </Grid>
//         // </Grid>
//         <Container maxWidth="70%" justify-content="center" align-items="center">
//             <div className="App">
//                 <div style={{width: '100%', align: 'center', padding: '10px'}}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <Paper className={classes.paper}>
//                                 My Consumption
//                             </Paper>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Typography>
//                                 Περιβαλλοντικό πρόγραμμα "Το ταξίδι του Σταγονούλη
//                             </Typography>
//                             <CardPreview url="https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"/>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <CardPreview url="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
//                         </Grid>
//                         <Grid item xs={6} sm={4} md={3}>
//                             <CardPreview url="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
//                         </Grid>
//                         <Grid item xs={6} sm={4} md={3}>
//                             <CardPreview url="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
//                         </Grid>
//                         <Grid item xs={6} sm={4} md={3}>
//                             <CardPreview url="https://images.unsplash.com/photo-1555063200-219c0652df49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
//                         </Grid>
//                         <Grid item xs={6} sm={4} md={3}>
//                             <CardPreview url="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
//                         </Grid>
//                     </Grid>
//                 </div>
//             </div>
//         </Container>
//     );
// }

import React, {useEffect, useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../../firebase.js";
import {useHistory} from "react-router-dom";
import MainFeatured from "./MainFeatured";
import SecondFeatured1 from "./SecondFeatured";
import MainImgFeatured1 from "../image-grid/Image1";
import MainImgFeatured2 from "../image-grid/Image2";
import MainImgFeatured3 from "../image-grid/Image3";
import MainImgFeatured4 from "../image-grid/Image4";
import MainImgFeatured5 from "../image-grid/Image5";
import MainImgFeatured6 from "../image-grid/Image6";
import MainImgFeatured7 from "../image-grid/Image7";
import MainImgFeatured8 from "../image-grid/Image8";
import MainImgFeatured9 from "../image-grid/Image9";

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


export default function ThirdFeatured() {
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
                <div style={{width: '100%', align: 'center', padding: '10px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                My Newsstand
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MainImgFeatured1/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MainImgFeatured2/>
                        </Grid>
                        <Grid item xs={12}>
                            <MainImgFeatured3/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MainImgFeatured4/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MainImgFeatured5/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <MainImgFeatured6/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <MainImgFeatured7/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <MainImgFeatured8/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <MainImgFeatured9/>
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <Paper className={classes.paper}>1/2 Size</Paper>*/}
                        {/*</Grid>*/}
                    </Grid>
                </div>
            </div>
        </Container>
    )
        ;
}