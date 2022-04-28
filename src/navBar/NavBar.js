import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements';

const Navbar = () => {
    return (
        <>
            <Nav>

                <Bars/>

                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/consumption' activeStyle>
                        My consumption
                    </NavLink>
                    <NavLink to='/newsstand' activeStyle>
                        Newsstand
                    </NavLink>
                    {/*<NavLink to='/games' activeStyle>*/}
                    {/*    Τα παιχνίδια μου*/}
                    {/*</NavLink>*/}
                    <NavLink to='/quiz' activeStyle>
                        Quiz
                    </NavLink>
                    <NavLink to='/leaderboard' activeStyle>
                        Leaderboard
                    </NavLink>
                    <NavLink to='/faq' activeStyle>
                        FAQ
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign Out</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;