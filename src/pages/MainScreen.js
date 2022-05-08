import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavBtn, NavBtnLink, NavLink, NavMenu} from "../navBar/NavBarElements";
import {logout} from "../firebase";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import SignIn from "./signin";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        minHeight: 128,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: theme.spacing(9),
        },
    },
    toolbarTitle: {
        letterSpacing: 1.25,
        fontWeight: "bold",
    },
    menuButtons: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
        },
    },
    item: {
        padding: theme.spacing(1),
        [theme.breakpoints.up("md")]: {
            paddingLeft: theme.spacing(3),
        },
    },
}));



    // const backgroundImage =
    //     'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

    export default function MainScreen() {
        const classes = useStyles();

        return (
            <div class="bg-image d-flex justify-content-center align-items-center" style={{
                // width: '100%',
                // height: '800px',

                height: '100vh',
                backgroundImage: `url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>




                <Container>
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="left"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                            ACQUATTICA.COM
                        </Typography>
                        <NavMenu>
                            <NavLink to='/signin' activeStyle>
                                <h6>Sign In</h6>
                            </NavLink>
                            <NavLink to='/signup' activeStyle>
                                <h6>Sign Up</h6>
                            </NavLink>
                        </NavMenu>

                    </Toolbar>

                </Container>





            </div>
        );
    }

