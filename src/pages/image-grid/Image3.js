import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainImgFeatured3: {
        height: 300,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainImgFeaturedContent3: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainImgFeatured3() {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainImgFeatured3}>
            <Grid item md={6} className={classes.mainImgFeaturedContent3}>
                <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
                    Planting trees can be one tool to fight climate change
                </Typography>
                <Typography variant="body1" color="inherit" paragraph align='left'>
                    With a growing number of tree planting initiatives at regional to global scales, Karen Holl and Pedro Brancalion highlight in their latest research how planting trees is much more complicated than it seems. Here they share their findings, including guidelines to increase success of these ambitious efforts world-wide...
                </Typography>
            </Grid>
        </Grid>
    );
}