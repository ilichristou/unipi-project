import React from 'react';
import Board from "../components/Board";
import '../components/style.css';
import {Grid} from "@material-ui/core";

const Leaderboard = () => {

    return (
        <div className="App" id='main'>
            <Grid container>
                <Grid>
                    <Board/>
                </Grid>
            </Grid>
        </div>
    );

}

export default Leaderboard;