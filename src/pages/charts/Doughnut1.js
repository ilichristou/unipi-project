import React from "react";
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui';
import {gridSpacing} from "../demo-data/constant";
import {Grid} from "@material-ui/core";


const App = () => {

// Sample data
    const data = [
        {argument: 'Monday', value: 10},
        {argument: 'Tuesday', value: 40},
        {argument: 'Wednesday', value: 10},
        {argument: 'Thursday', value: 20},
        {argument: 'Friday', value: 20},
    ];

    const paperStyle = {padding: 30, margin: "20px auto", align: "right"}

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item lg={6} xs={6} sm={6}>
                <Paper elevation={20} style={paperStyle}>
                    <Chart
                        data={data}
                    >
                        <PieSeries valueField="value"
                                   argumentField="argument"
                                   innerRadius={0.6}/>
                        <Title text="Studies per day"/>
                    </Chart>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default App;