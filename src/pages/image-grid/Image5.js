import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainImgFeatured5: {
        height: 300,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1555063200-219c0652df49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainImgFeaturedContent5: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainImgFeatured5() {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainImgFeatured5}>
            <Grid item md={6} className={classes.mainImgFeaturedContent5}>
                <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
                    Saving Water, Saving Lives
                </Typography>
                <Typography variant="body1" color="inherit" paragraph align='left'>
                    Water is a basic necessity of life, and it may seem inconceivable to imagine living without it. But the stark reality is that many people around the world do. The availability of fresh water for ...
                </Typography>
            </Grid>
        </Grid>
    );
}