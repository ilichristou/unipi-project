import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainImgFeatured2: {
        height: 300,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainImgFeaturedContent2: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainImgFeatured2() {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainImgFeatured2}>
            <Grid item md={6} className={classes.mainImgFeaturedContent2}>
                <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
                    Powering the Future
                </Typography>
                <Typography variant="body1" color="inherit" paragraph align='left'>
                    Decarbonisation of the European economy is one of the main strategic goals of energy transition in the European Union (EU), which aims to become a leader in this process by 2050 and to include other European c...
                </Typography>
            </Grid>
        </Grid>
    );
}