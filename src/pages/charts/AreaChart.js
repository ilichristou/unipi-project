import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    AreaSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import {ArgumentScale, Animation} from '@devexpress/dx-react-chart';
import {styled} from '@mui/material/styles';
import {scalePoint} from 'd3-scale';
import {gridSpacing} from '../demo-data/constant';
import {Grid} from "@material-ui/core";

const data = [
    {year: '2010', android: 67225, ios: 46598},
    {year: '2011', android: 179873, ios: 90560},
    {year: '2012', android: 310088, ios: 118848},
    {year: '2015', android: 539318, ios: 189924},
];

const PREFIX = 'Demo';

const classes = {
    chart: `${PREFIX}-chart`,
};

const StyledChartRoot = styled(Chart.Root)(() => ({
    [`&.${classes.chart}`]: {
        paddingRight: '20px',
    },
}));

const ChartRoot = props => (
    <StyledChartRoot {...props} className={classes.chart}/>
);
const LegendRoot = props => (
    <Legend.Root {...props} sx={{display: 'flex', margin: 'auto', flexDirection: 'row'}}/>
);
const LegendLabel = props => (
    <Legend.Label {...props} sx={{pt: 1}}/>
);
const LegendItem = props => (
    <Legend.Item {...props} sx={{flexDirection: 'column'}}/>
);

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const {data: chartData} = this.state;
        const paperStyle = {padding: 10, margin: "20px auto", align: "right"}

        return (
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={20} style={paperStyle}>
                        <Chart
                            data={chartData}
                            rootComponent={ChartRoot}
                        >
                            <ArgumentScale factory={scalePoint}/>
                            <ArgumentAxis/>
                            <ValueAxis/>

                            <AreaSeries
                                name="Android"
                                valueField="android"
                                argumentField="year"
                            />
                            <AreaSeries
                                name="iOS"
                                valueField="ios"
                                argumentField="year"
                            />
                            <Animation/>
                            <Legend
                                position="bottom"
                                rootComponent={LegendRoot}
                                itemComponent={LegendItem}
                                labelComponent={LegendLabel}
                            />
                            <Title
                                text="Worldwide Sales to End Users by OS"
                            />
                        </Chart>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}
