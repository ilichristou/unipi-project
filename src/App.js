import './App.css';
import Sidebar from "./Menu/Sidebar";
import {Typography, Button, ButtonGroup, CssBaseline, Container} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import useStyles from './styles';
//import Footer from './footer';
import Home from './pages/home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Signin from './pages/signin';
import Consumption from './pages/consumption';
import Games from './pages/games';
import Quiz from './pages/myquiz';
import Leaderboard from './pages/leaderboard'
//import {Leaderboard} from "@mui/icons-material";
import FAQ from './pages/faq';
import Newsstand from './pages/newsstand';
import Signup from './pages/signup';
import footer from './footer';
import firebase from './firebase';
import Logout from "./pages/logout";
import {ThemeProvider} from '@mui/material/styles';
import {useSelector} from 'react-redux';
import NavBar from './navBar/NavBar';
import NavigationBar from './navBar/NavigationBar';
import MiniMenu from './Menu/MiniMenu';
import AppBar from './Menu/AppBar';
import AppMenu from './Menu/AppMenu'
import RightMenu from './Menu/RightMenu';
import AppBar1 from './Menu/AppBar1';
import AppDrawer from './Menu/AppDrawer';
import {Component} from "react";
import Dashboard from "./pages/Dashboard";


// function App() {
//     const classes = useStyles();
//     // const customization = useSelector((state) => state.customization);
//
// function App() {
//     return (
// <div className="App">
//     <>
//
//         <CssBaseline/>
// <NavigationBar/>
//         <main>
//             <Router>
//                 <div className={classes.container}>
//                     <Container maxWidth="sm">
//                         <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
//                             <img src="/logohome.png" alt="logo" width="60%"></img>
//                             <br/>
//                         </Typography>
//                         <br/>
//
//                         <Typography>
//                             <navBar/>
//                         </Typography>
//
//                         <ButtonGroup variant="text" aria-label="text button group">
//                             <Button href="/home">HOME</Button>
//                             <Button href="/about">ABOUT</Button>
//                             <Button href="/signin">SIGN IN</Button>
//                             <Button href="/signup">SIGN UP</Button>
//                         </ButtonGroup>
//                     </Container>
//                     <Switch>
//                         <Route path="/" exact>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <Signin/>
//                         </Route>
//                         <Route path="/home" exact>
//                             <Home/>
//                         </Route>
//                         <Route path="/about" exact>
//                             <About/>
//                         </Route>
//                         <Route path="/signin" exact>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <Signin/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                         </Route>
//                         <Route path="/signup" exact>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <Signup/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                         </Route>
//                         <Route path="/logout" exact>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <logout/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                             <br/>
//                         </Route>
//                     </Switch>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <Footer/>
//                 </div>
//             </Router>
//         </main>
//
//     </>
// </div>
function App() {

    return (
        <Router>
            {/*<Typography variant="h4" align="left" color="textPrimary" gutterBottom>*/}
            {/*    <img src="/logohome.png" alt="logo" width="10%"></img>*/}
            {/*    <br/>*/}
            {/*</Typography>*/}
            {/*<NavBar/>*/}
            {/*<Sidebar/>*/}

            {/*<MiniMenu/>*/}
            {/*<AppMenu/>*/}

            {/*<RightMenu/>*/}
            {/*<AppBar1/>*/}
            {/*<AppDrawer/>*/}
            {/*<NavigationBar/>*/}

            <Switch>
                <Route path='/' exact> <br/> <br/> <Signin/> </Route>
                {/*<Route path='/' > <br/> <br/> <Dashboard/> </Route>*/}
                <Route path='/Dashboard' exact component={Dashboard}> <br/> <br/> <Dashboard/> </Route>
                <Route path='/home' exact component={Home}> <br/> <br/> <Home/> </Route>
                {/*<Route path='/consumption' component={Consumption}/>*/}
                <Route path='/consumption' exact component={Consumption}> <br/> <br/> <Consumption/> </Route>
                <Route path='/newsstand' exact component={Newsstand}> <br/> <br/> <Newsstand/> </Route>
                <Route path='/games' exact component={Games}> <br/> <br/> <Games/> </Route>
                <Route path='/games/quiz' exact component={Quiz}> <br/> <br/> <Quiz/> </Route>
                <Route path='/games/leaderboard' exact component={Leaderboard}> <br/> <br/> <Leaderboard/> </Route>
                <Route path='/faq' exact component={FAQ}> <br/> <br/><FAQ/> </Route>
                <Route path='/signin' exact component={Signin}> <br/> <br/> <Signin/> </Route>
                <Route path='/signup' exact component={Signup}> <br/> <br/> <Signup/> </Route>
            </Switch>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <footer/>

        </Router>
    );
}

export default App;

