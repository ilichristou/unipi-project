// import React from 'react';
// import {Grid, Link, Typography} from "@material-ui/core";
// import {gridSpacing} from "./demo-data/constant";
// import AreaChart from "./charts/AreaChart";
// import Doughnut from "./charts/Doughnut";
// import Calendar from "./charts/Calendar"
// import Paper from "@mui/material/Paper";
// import BarChart1 from "./charts/BarChart1";
// import MonthCalendar from "./charts/MonthCalendar"
//
// //container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
//
//
// const paperStyle = {padding: 30, margin: "20px auto", align: "right"}
//
// const home = () => {
//     return (
//         <div>
//             <Grid container>
//                 <Grid>
//                     <MonthCalendar/>
//                     <BarChart1/>
//                     <Calendar/>
//                     <AreaChart/>
//                     <Doughnut/>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }
//
//
// export default home;

import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AreaChart from "./charts/AreaChart";
import Doughnut from "./charts/Doughnut";
import Calendar from "./charts/Calendar";
import BarChart1 from "./charts/BarChart1";
import MonthCalendar from "./charts/MonthCalendar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import card1 from "../items/card1";
import NavigationBar from "../navBar/NavigationBar";
import footer from "./footer";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function RowAndColumnSpacing() {
    return (
        <React.Fragment>
            <NavigationBar/>

                <main>
                    <card1/>
                </main>
            <footer/>
        </React.Fragment>
        // <React.Fragment>
        //     <NavigationBar/>
        //     <card1/>
        // </React.Fragment>
        // <Box component="main" sx={{flexGrow: 1, p: 3}}>
        //
        //     <Toolbar/>
        //     <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        //         <Box gridColumn="span 4">
        //             <Item>
        //                 <MonthCalendar/>
        //             </Item>
        //         </Box>
        //         <Box gridColumn="span 6">
        //             <Item>
        //                 <BarChart1/>
        //             </Item>
        //         </Box>
        //         <Box gridColumn="span 4">
        //             <Item>
        //                 <AreaChart/>
        //             </Item>
        //         </Box>
        //         <Box gridColumn="span 8">
        //             <Item>
        //                 <Doughnut/>
        //             </Item>
        //         </Box>
        //     </Box>
        // </Box>
        //     <Box
        //     component="main"
        //     sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
        // >
        //     <Toolbar/>
        //         <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        //             <Box gridColumn="span 4">
        //                 <Item>
        //                     <MonthCalendar/>
        //                 </Item>
        //             </Box>
        //             <Box gridColumn="span 6">
        //                 <Item>
        //                     <BarChart1/>
        //                 </Item>
        //             </Box>
        //             <Box gridColumn="span 4">
        //                 <Item>
        //                     <AreaChart/>
        //                 </Item>
        //             </Box>
        //             <Box gridColumn="span 8">
        //                 <Item>
        //                     <Doughnut/>
        //                 </Item>
        //             </Box>
        //         </Box>
        //     </Box>
    )
        ;
}
