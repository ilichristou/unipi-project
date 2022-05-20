import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Menu} from "@material-ui/core";
import {NavBtn, NavBtnLink, NavLink, NavMenu} from "../navBar/NavBarElements";
import {logout} from "../firebase";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavMenu>
                <NavLink to='/Dashboard' activeStyle>
                    HOME
                </NavLink> <br/>
                <NavLink to='/consumption' activeStyle>
                    CONSUMPTION
                </NavLink> <br/>
                {/*<NavLink to='/newsstand' activeStyle>*/}
                {/*    NEWSSTAND*/}
                {/*</NavLink>*/}
                {/*<NavLink to='/games' activeStyle>*/}
                {/*    Τα παιχνίδια μου*/}
                {/*</NavLink>*/}
                <NavLink to='/joinQuiz' activeStyle>
                    QUIZ
                </NavLink> <br/>
                <NavLink to='/leaderboard' activeStyle>
                    LEADERBOARD
                </NavLink> <br/>
                {/*<MenuItem onClick={logout} href="/">*/}
                {/*    Log out*/}
                {/*</MenuItem>*/}
                <NavBtn>
                    <NavBtnLink onClick={logout} to="/">SIGN OUT</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        ACQUATTICA
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

            </Box>

        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;

// import React from "react";
// import {
//     Drawer as MUIDrawer,
//     ListItem,
//     List,
//     ListItemIcon,
//     ListItemText
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { withRouter } from "react-router-dom";
//
// const useStyles = makeStyles({
//     drawer: {
//         width: "500px"
//     }
// });
//
// const Drawer = props => {
//     const { history } = props;
//     const classes = useStyles();
//     const itemsList = [
//         {
//             text: "Home",
//             icon: <InboxIcon />,
//             onClick: () => history.push("/")
//         },
//         {
//             text: "About",
//             icon: <MailIcon />,
//             onClick: () => history.push("/faq")
//         },
//         {
//             text: "Contact",
//             icon: <MailIcon />,
//             onClick: () => history.push("/consumption")
//         }
//     ];
//     return (
//         <MUIDrawer variant="permanent" className={classes.drawer}>
//             <List>
//                 {itemsList.map((item, index) => {
//                     const { text, icon, onClick } = item;
//                     return (
//                         <ListItem button key={text} onClick={onClick}>
//                             {icon && <ListItemIcon>{icon}</ListItemIcon>}
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     );
//                 })}
//             </List>
//         </MUIDrawer>
//     );
// };
//
// export default withRouter(Drawer);