// import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "./pages/signin";
import Consumption from "./pages/consumption";
import Leaderboard from "./pages/leaderboard";
import Faq from "./pages/faq";
import Newsstand from "./pages/newsstand";
import Signup from "./pages/signup";
import footer from "./footer";
import Dashboard from "./pages/Dashboard";
import History from "./pages/components/History";
import WaterCycle from "./pages/components/WaterCycle";
import Environment from "./pages/components/Environment";
import Devices from "./pages/components/Devices";
import EnergySaving from "./pages/components/EnergySaving";
import Network from "./pages/components/Network";
import Start from "./pages/components/start";
import MainScreen from "./pages/MainScreen";

function App() {
    return (
        <Router>

            <Switch>
                <Route path="/" exact>
                    {" "}
                    <br /> <br /> <MainScreen />{" "}
                </Route>
                {/*<Route path='/' > <br/> <br/> <Dashboard/> </Route>*/}
                <Route path="/Dashboard" exact component={Dashboard}>
                    {" "}
                    <br /> <br /> <Dashboard />{" "}
                </Route>
                <Route path="/home" exact component={Home}>
                    {" "}
                    <br /> <br /> <Home />{" "}
                </Route>
                {/*<Route path='/consumption' component={Consumption}/>*/}
                <Route path="/consumption" exact component={Consumption}>
                    {" "}
                    <br /> <br /> <Consumption />{" "}
                </Route>
                <Route path="/newsstand" exact component={Newsstand}>
                    {" "}
                    <br /> <br /> <Newsstand />{" "}
                </Route>
                {/*<Route path="/games" exact component={Games}>*/}
                {/*    {" "}*/}
                {/*    <br /> <br /> <Games />{" "}*/}
                {/*</Route>*/}
                {/* <Route path="/games/quiz" exact component={Quiz}>
          {" "}
          <br /> <br /> <Quiz />{" "}
        </Route> */}
                <Route path="/leaderboard" exact component={Leaderboard}>
                    {" "}
                    <br /> <br /> <Leaderboard />{" "}
                </Route>
                <Route path="/faq" exact component={Faq}>
                    {" "}
                    <br /> <br />
                    <Faq />{" "}
                </Route>
                <Route path="/signin" exact component={Signin}>
                    {" "}
                    <br /> <br /> <Signin />{" "}
                </Route>
                <Route path="/signup" exact component={Signup}>
                    {" "}
                    <br /> <br /> <Signup />{" "}
                </Route>
                <Route path="/history" exact component={History}>
                    {" "}
                    <br /> <br /> <History />{" "}
                </Route>
                <Route path="/waterCycle" exact component={WaterCycle}>
                    {" "}
                    <br /> <br /> <WaterCycle />{" "}
                </Route>
                <Route path="/environment" exact component={Environment}>
                    {" "}
                    <br /> <br /> <Environment />{" "}
                </Route>
                <Route path="/devices" exact component={Devices}>
                    {" "}
                    <br /> <br /> <Devices />{" "}
                </Route>
                <Route path="/energySaving" exact component={EnergySaving}>
                    {" "}
                    <br /> <br /> <EnergySaving />{" "}
                </Route>
                <Route path="/network" exact component={Network}>
                    {" "}
                    <br /> <br /> <Network />{" "}
                </Route>

                <Route path="/joinQuiz" exact component={Start}>
                    {" "}
                    <br /> <br /> <Start />{" "}
                </Route>
                <Route path="/acquattica" exact component={MainScreen}>
                    {" "}
                    <br /> <br /> <MainScreen />{" "}
                </Route>
            </Switch>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <footer />
        </Router>
    );
}

export default App;
