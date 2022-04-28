// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
// import {NavLink} from "../navBar/NavBarElements";
//
// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {"Copyright © "}
//             <Link color="inherit" href="https://www.instagram.com/ilichristou/">
//                 CHILI
//             </Link>
//             {" " + new Date().getFullYear()}
//         </Typography>
//     );
// }
//
// const useStyles = makeStyles((theme) => ({
//     footer: {
//         padding: theme.spacing(8),
//     },
// }));
//
// export default function Footer() {
//     const classes = useStyles();
//
//     return (
//         <footer className={classes.footer}>
//             <Container maxWidth="lg">
//                 <Typography variant="h6" align="center" gutterBottom>
//                     ACQUATTICA.COM
//                 </Typography>
//                 <Typography
//                     variant="subtitle1"
//                     align="center"
//                     color="textSecondary"
//                     component="p"
//                 >
//                     Save the water!
//                 </Typography>
//                 <NavLink to='/faq' activeStyle>
//                     FAQ
//                 </NavLink>
//                 <Copyright />
//             </Container>
//         </footer>
//     );
//}

import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footerStyles";
import Link from "@material-ui/core/Link";

export default function Footer() {
    return (
        <React.Fragment>
            <Box>
                <h5 style={{
                    color: "#444444",
                    textAlign: "center",
                    marginTop: "-50px"
                }}>
                    ACQUATTICA.COM
                </h5>
                <br/>
                <FooterLink href="#">About us</FooterLink><br/>
                <FooterLink href="/FAQ">FAQ</FooterLink><br/>
                <FooterLink href="https://goo.gl/maps/na7GqMTANhGHGp2HA">Contact</FooterLink>
            </Box>
            {/*<Link*/}
            {/*    color="inherit"*/}
            {/*    href="https://www.facebook.com/panagiota.tsamasioth"*/}
            {/*    target="_noblank"*/}
            {/*>*/}
            {/*    ACQUATTICA.COM: Save the water @*/}
            {/*</Link>{" "}*/}
            {/*{new Date().getFullYear()}*/}
        </React.Fragment>
    );
}



