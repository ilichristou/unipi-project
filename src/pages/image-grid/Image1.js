import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainImgFeatured1: {
        height: 300,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainImgFeaturedContent1: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainImgFeatured1() {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainImgFeatured1}>
            <Grid item md={6} className={classes.mainImgFeaturedContent1}>
                <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
                    Why does digital transformation matter?
                </Typography>
                <Typography variant="body1" color="inherit" paragraph align='left'>
                    A business may take on digital transformation for several reasons. But by far, the most likely reason is that ...
                </Typography>
            </Grid>
        </Grid>
    );
}