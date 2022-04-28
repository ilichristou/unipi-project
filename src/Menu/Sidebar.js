import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";
import {IconContext} from "react-icons/lib";
import {Typography} from "@material-ui/core";
import Paper from "@mui/material/Paper";
import {BiUserCircle, IoMenu} from "react-icons/all";
import {NavBtn, Bars, NavBtnLink, NavLink, NavMenu} from "../navBar/NavBarElements";
import Button from 'react-bootstrap/button';
import Toolbar from "@mui/material/Toolbar";


const Nav = styled.div`
  background: #deb9be;
  height: 95px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 300px;
  height: 200vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({sidebar}) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const paperStyle = {align: "right"}

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Paper elevation={20} style={paperStyle}>
                <IconContext.Provider value={{color: "#0b5394"}}>
                    <Nav>
                        <Bars/>
                        <NavIcon to="#">
                            <IoMenu onClick={showSidebar} style={{marginLeft: "40px"}}/>
                        </NavIcon>
                        <NavMenu>
                            <Toolbar>
                                <Typography variant="h6" noWrap component="div" value={{color: "#0b5394"}}>
                                    ACQUATTICA
                                </Typography>
                            </Toolbar>
                            {/*<Typography variant="h4" color="textPrimary" gutterBottom>*/}
                            {/*    <img style={{marginLeft: "25px", marginTop: "10px"}} src="/logohome_transparent.png"*/}
                            {/*         alt="logo" width="10%"></img>*/}
                            {/*    <br/>*/}
                            {/*</Typography>*/}
                            <NavLink to='/home' activeStyle>
                                Home
                            </NavLink>
                            <NavLink to='/consumption' activeStyle>
                                Consumption
                            </NavLink>
                            <NavLink to='/leaderboard' activeStyle>
                                Leaderboard
                            </NavLink>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Sign Out</NavBtnLink>
                        </NavBtn>
                    </Nav>
                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <NavIcon to="#">
                                <AiIcons.AiOutlineClose onClick={showSidebar}/>
                            </NavIcon>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index}/>;
                            })}
                        </SidebarWrap>
                    </SidebarNav>
                </IconContext.Provider>
            </Paper>
        </>
    );
};

export default Sidebar;
