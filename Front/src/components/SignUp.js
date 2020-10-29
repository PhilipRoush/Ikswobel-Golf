import React, { Component } from "react";
import axios from "axios";
import './SignUp.css'
export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      city: "",
      state: "",
      handicap: "",
      registrationErrors: ""
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
    const { email, password, password_confirmation, first_name, last_name, city, state, handicap } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            first_name: first_name,
            last_name: last_name,
            city: city,
            state: state,
            handicap: handicap

          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="signform-container">
       
      <form onSubmit={this.handleSubmit} className='signform'>
        
      <h3 className= 'signform-header'>
          WELCOME TO IKSWOBEL!
        </h3>
        
        <div className='signform-inputs'>
         <label className='signform-label'> </label>
          <input
            className="signform-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='signform-inputs'>
        <label className='signform-label'> </label>
          <input
            className="signform-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
        
        <div className='signform-inputs'>
        <label className='signform-label'></label>
          <input
            className="signform-input"
            type="password"
            name="password_confirmation"
            placeholder="Enter your password"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='signform-inputs'>
        <label className='signform-label'> </label>
        <input
            className="signform-input"
            type="first_name"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />
        </div>
        

        <div className='signform-inputs'>
        <label className='signform-label'> </label>
        <input
            className="signform-input"
            type="last_name"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='signform-inputs'>
        <label className='signform-label'></label>
          <input
            className="signform-input"
            type="city"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='signform-inputs'>
        <label className='signform-label'></label>
          <input
            className="signform-input"
            type="state"
            name="state"
            placeholder="State Ex: TX"
            value={this.state.state}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='signform-inputs'>
        <label className='signform-label'></label>
          <input
            className="signform-input"
            type="handicap"
            name="handicap"
            placeholder="Enter your handicap.."
            value={this.state.handicap}
            onChange={this.handleChange}
            required
          />
        </div>

          <button className='signform-input-btn' type="submit">SIGN UP</button>
         
        </form>
        <div className="right-container">
        <div className="bg">
        <div className="text">
          
        </div>
        </div>
        </div>

      </div>
    );
  }
}
