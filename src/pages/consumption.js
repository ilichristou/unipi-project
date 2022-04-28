//import React from 'react';
// import {Grid, Link, Typography} from "@material-ui/core";
// import {gridSpacing} from "./demo-data/constant";
// import BarChart from "./charts/BarChart";
// import ThreeBarChart from "./charts/ThreeBarChart";
// import Paper from "@mui/material/Paper";
//
//
// const paperStyle = {padding: 30, margin: "20px auto", align: "right"}
//
// const newsstand = () => {
//     return (
//         <div>
//             <Grid container spacing={gridSpacing}>
//                 <Grid>
//                     <BarChart/> <ThreeBarChart/>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }
//
//
// export default newsstand;

import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BarChart1 from "./charts/BarChart";
import Doughnut from "./charts/BarChart";
import ThreeBarChart from "./charts/ThreeBarChart";
import AreaChart from "./charts/BarChart";
import {CssBaseline} from "@material-ui/core";
import NavigationBar from "../navBar/NavigationBar";
import Container from "@material-ui/core/Container";

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

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <Container maxWidth="70%" justify-content="center">
            <div className="App">
                <CssBaseline/>
                <NavigationBar/>
                <div style={{width: '70%', align: 'center', padding: '10px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                My Water Consumption
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <BarChart1/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ThreeBarChart/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Doughnut/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AreaChart/>
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
