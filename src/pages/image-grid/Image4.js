import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainImgFeatured4: {
        height: 300,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: "url(https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainImgFeaturedContent4: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainImgFeatured4() {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainImgFeatured4}>
            <Grid item md={6} className={classes.mainImgFeaturedContent4}>
                <Typography component="h1" variant="h5" color="inherit" gutterBottom align='left'>
                    Impact Business IT Excellence Awards 2019
                </Typography>
                <Typography variant="body1" color="inherit" paragraph align='left'>
                    Digital Management Information Department of the Company won a gold award in the category "Continuous Business Improvement" ...
                </Typography>
            </Grid>
        </Grid>
    );
}