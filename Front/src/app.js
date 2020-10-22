import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
// import Home from "../components/Home";
import HomePage from "./components/HomePage";
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Log from './components/Log'
// import GolfCourseList from "./components/GolfCourseList";
import CourseMap from "./components/CourseMap"
import MatchMeetUps from "./components/MatchMeetUps";
import MatchDetails from "./components/MatchDetails";
// import MatchEdit from "./components/MatchEdit"
import AddMatch from "./components/AddMatch"
// import Top100sMap from './components/Top100sMap'
import Top100sMap from './components/Top100sMap'
import GolfCourseContainer from './components/GolfCourseContainer'
import GolfCourseDetails from "./components/GolfCourseDetails";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
      
      
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

    

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }



  render() {
   
    return (
 
      <div className="app">
      <Router>
        <NavBar />
        
          <Switch>
             <Route
              exact
              path={"/"}
              render={props => (
                <HomePage
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
             {/* <Route path='/sign-up' component={Home} /> */}
             <Route
              exact
              path={"/sign-up"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                 
                />
              )}
            />
            
            <Route
              exact
              path={"/login"}
              render={props => (
                <Log
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
         
             <Route
              exact
              path={"/golf-courses"}
              render={props => (
                <CourseMap
                  {...props}
                  
                  
                />
              )}
            />
            <Route
              exact
              path={"/top-100-golf-courses"}
              render={props => (
                <Top100sMap
                  {...props}
                  
                  
                />
              )}
            />
            <Route
              exact
              path={"/top-100-golf-courses/:id"}
              render={props => (
                <GolfCourseDetails
                  {...props}
                  
                  
                />
              )}
            />
            {/* <Route
              exact
              path={"/top-100-golf-courses/:id"}
              render={props => (
                <Top100sDetails
                  {...props}
                  
                  
                />
              )}
            /> */}
            {/* <Route exact path={"/matches"} component={MatchMeetUps} /> */}
            
            <Route
              exact
              path={"/services"}
              render={props => (
                <GolfCourseContainer
                  {...props}
                  
                  
                />
              )}
            />
            <Route
              exact
              path={"/matches"}
              render={props => (
                <MatchMeetUps
                  {...props}
                  user={this.state.user}
                  
                />
              )}
            />
            {/* <Route exact path={'/matches/add'} component={AddMatch} /> */}
            
            <Route
              exact
              path={"/matches/add"}
              render={props => (
                <AddMatch
                  {...props}
                  user={this.state.user}
                  
                />
              )}
            />
           <Route
              exact
              path={"/matches/:id"}
              render={props => (
                <MatchDetails
                  {...props}
                  user={this.state.user}
                  
                />
              )}
            />
          </Switch>
        </Router>
     </div>
    );
  }
}

// export default App;
