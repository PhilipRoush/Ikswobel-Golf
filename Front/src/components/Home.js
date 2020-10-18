import React, { Component } from "react";
import axios from "axios";
// import Registration from "./Registration";
// import Login from "./Login";
import SignUp from './SignUp'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        
        
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
        
        {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
      </div>
    );
  }
}
