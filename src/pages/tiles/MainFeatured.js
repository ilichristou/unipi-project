import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainFeatured: {
        height: 300,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1460501501851-d5946a18e552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainFeaturedContent: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainFeatured() {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainFeatured}>
            <Grid item md={6} className={classes.mainFeaturedContent}>
                <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
                    Save water!
                </Typography>
                <Typography variant="body1" color="inherit" paragraph align='left'>
                    Every drop counts. The future is in your hands.
                </Typography>
            </Grid>
        </Grid>
    );
}