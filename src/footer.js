// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
//
// function Footer() {
//
//     return (
//
//         <Typography variant="caption" fontSize="8px" align='center'>
//             {'Copyright ©'}
//             {new Date().getFullYear()}
//             {' '}
//             created by chili
//
//         </Typography>
//     );
// }
//
// export default Footer;

import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./styles/FooterStyles";
import {Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <Box>
            <br/>
            <Typography variant="h4" color="textPrimary" gutterBottom>
                <img style={{marginLeft: "850px", marginTop: "10px"}} src="/logohome-b.png"
                     alt="logo" width="9%"></img>
                <br/>
            </Typography>
            <br/>
            {/*<h3 style={{*/}
            {/*    color: "#ffffff",*/}
            {/*    textAlign: "center",*/}
            {/*    marginTop: "-30px"*/}
            {/*}}>*/}
            {/*    Acquattica SA*/}
            {/*</h3>*/}
            <Container
            >
                <Row>
                    <Column>
                        <h4 style={{
                            color: "#93b8da"
                        }}>About us</h4>
                        <FooterLink href="#" style={{
                            color: "#444444"}}>Enterprise Profile</FooterLink>
                        <FooterLink href="#" style={{
                            color: "#444444"}}>Our Strategy</FooterLink>
                        <FooterLink href="#" style={{
                            color: "#444444"}}>Our Vision</FooterLink>
                    </Column>
                    <Column>
                        <h4 style={{
                            color: "#93b8da",
                            //textAlign: "center"
                        }}>Services</h4>
                        <FooterLink href="#" style={{
                            color: "#444444"}}>Water Supply</FooterLink>
                        <FooterLink href="#" style={{
                            color: "#444444"}}>Drainage</FooterLink>
                        <FooterLink href="#" style={{
                            color: "#444444"}}>Sewage Treatment</FooterLink>
                    </Column>
                    <Column>
                        <h4 style={{
                            color: "#93b8da"
                        }}>Contact us</h4>
                        <FooterLink href="https://goo.gl/maps/9UwEFNoz8ySzENJP8">
                            <i className="fa fa-map-marker" aria-hidden="true">
				<span style={{marginLeft: "10px", color: '#444444'}}>156 Oropou str., Galatsi
				</span>
                            </i>
                        </FooterLink>
                        <FooterLink style={{
                            color: "#444444"}}>+30 210 214 6739</FooterLink>
                        <FooterLink style={{
                            color: "#444444"}}>+30 210 214 6747</FooterLink>
                    </Column>
                    <Column>
                        <h4 style={{
                            color: "#93b8da"
                        }}>Social Media</h4>
                        {/*<FooterLink href="https://www.facebook.com/eydapgr">*/}
                        {/*    <i>*/}
                        {/*        <span style={{marginLeft: "10px"}}>*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg"*/}
                        {/*             className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28"*/}
                        {/*             viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" fill="none"*/}
                        {/*             stroke-linecap="round" stroke-linejoin="round">*/}
                        {/*            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>*/}
                        {/*            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>*/}
                        {/*        </svg>*/}
                        {/*        </span>*/}
                        {/*    </i>*/}
                        {/*</FooterLink>*/}
                        <FooterLink href="https://www.instagram.com/eydapgr/">
                            <i>
                                <span style={{marginLeft: "10px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28"
                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="4" width="16" height="16" rx="4"/>
                                    <circle cx="12" cy="12" r="3"/>
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"/>
                                </svg>
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://twitter.com/eydapgr">
                            <i>
                                <span style={{marginLeft: "10px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-brand-twitter" width="28" height="28"
                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"/>
                                </svg>
                                </span>
                            </i>
                        </FooterLink>
                        {/*<FooterLink href="https://www.youtube.com/channel/UCCTm1UBUuiZpOOWcfbGgzQg">*/}
                        {/*    <i>*/}
                        {/*        <span style={{marginLeft: "10px"}}>*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg"*/}
                        {/*             className="icon icon-tabler icon-tabler-brand-youtube" width="28" height="28"*/}
                        {/*             viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"*/}
                        {/*             stroke-linecap="round" stroke-linejoin="round">*/}
                        {/*            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>*/}
                        {/*            <rect x="3" y="5" width="18" height="14" rx="4"/>*/}
                        {/*            <path d="M10 9l5 3l-5 3z"/>*/}
                        {/*        </svg>*/}
                        {/*        </span>*/}
                        {/*    </i>*/}
                        {/*</FooterLink>*/}
                    </Column>
                </Row>
            </Container>
        </Box>
    )
        ;
};
export default Footer;

