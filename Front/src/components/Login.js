import React, { Component } from "react";
import axios from "axios";
import './logform.css'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="logform-container">
        
      <form onSubmit={this.handleSubmit} className='logform'>
      <h3>
          WELCOME BACK! LOGIN HERE
        </h3>
        <div className='logform-inputs'>
         <label className='logform-label'></label>
          <input
            className="logform-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='logform-inputs'>
        <label className='logform-label'></label>
          <input
            className="logform-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>

        <button className='logform-input-btn' type="submit">Login</button>
        </form>
      </div>
    );
  }
}
