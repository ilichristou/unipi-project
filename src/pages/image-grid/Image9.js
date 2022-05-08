import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainImgFeatured9: {
        height: 300,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1498642145410-c61aa8483bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainImgFeaturedContent9: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainImgFeatured9() {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainImgFeatured9}>
            <Grid item md={6} className={classes.mainImgFeaturedContent9}>
                <Typography component="h3" variant="h7" color="inherit" gutterBottom align='left'>
                    Do Dams Increase Water Use?
                </Typography>
                <Typography variant="body4" color="inherit" paragraph align='left'>
                    Reservoirs may promote waste by creating a ...
                </Typography>
            </Grid>
        </Grid>
    );
}