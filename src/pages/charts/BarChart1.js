import React from "react";
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import {gridSpacing} from "../demo-data/constant";
import {Grid} from "@material-ui/core";


const BarChart1 = () => {

// Sample data
    const data = [
        {argument: 'Monday', value: 30},
        {argument: 'Tuesday', value: 20},
        {argument: 'Wednesday', value: 10},
        {argument: 'Thursday', value: 50},
        {argument: 'Friday', value: 60},
    ];

    const paperStyle = {padding: 30, margin: "20px auto", align: "right"}

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item lg={6} xs={6} sm={6}>
                <Paper elevation={20} style={paperStyle}>
                    <Chart
                        data={data}
                    >
                        <ArgumentAxis/>
                        <ValueAxis/>

                        <BarSeries valueField="value" argumentField="argument"/>
                    </Chart>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default BarChart1;
