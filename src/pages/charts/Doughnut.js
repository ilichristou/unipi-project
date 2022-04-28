import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';
import {Grid} from "@material-ui/core";
import {gridSpacing} from "../demo-data/constant";

const data = [
    {region: 'Asia', val: 4119626293},
    {region: 'Africa', val: 1012956064},
    {region: 'Northern America', val: 344124520},
    {region: 'Latin America and the Caribbean', val: 590946440},
    {region: 'Europe', val: 727082222},
    {region: 'Oceania', val: 35104756},
];

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const {data: chartData} = this.state;
        const paperStyle = {padding: 30, margin: "20px auto", align: "right"}

        return (
            <Grid container spacing={gridSpacing}>
                <Grid item lg={6} xs={6} sm={6}>
                    <Paper elevation={20} style={paperStyle}>
                        <Chart
                            data={chartData}
                        >
                            <PieSeries
                                valueField="val"
                                argumentField="region"
                                innerRadius={0.6}
                            />
                            <Title
                                text="The Population of Continents and Regions"
                            />
                            <Animation/>
                        </Chart>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}