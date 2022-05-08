import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles1 = makeStyles((theme) => ({
    secondFeatured1: {
        height: 200,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1631586943189-f7487893cf7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    secondFeaturedContent1: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function SecondFeatured1() {
    const classes = useStyles1();

    return (
        <Container maxWidth="70%" justify-content="center" align-items="center">
            <div className="App">
                <div style={{width: '100%', align: 'center', padding: '10px'}}>
                    <Grid container className={classes.secondFeatured1}>
                        <Grid item md={6} className={classes.secondFeaturedContent1}>
                            <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
                                Together we are stronger!
                            </Typography>
                            <Typography variant="body1" color="inherit" paragraph align='left'>
                                The future is in our hands.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
}