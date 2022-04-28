import React from 'react'
import 'rsuite/dist/rsuite.css';
import {Calendar} from 'rsuite';
import {gridSpacing} from "../demo-data/constant";
import {Grid} from "@material-ui/core";
import Paper from "@mui/material/Paper";
//display: 'block'

export default function MonthCalendar() {
    const paperStyle = {padding: 30, margin: "20px auto", align: "right"}

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={3} sm={3}>
                <Paper elevation={20} style={paperStyle}>
                    <div style={{
                        width: 400, height: 700
                    }}>
                        <h4>My calendar</h4>
                        <Calendar/>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

