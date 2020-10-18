import React, { Component } from "react";
import axios from "axios";
import './Form.css'
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
      <div className="form-container">
      <form onSubmit={this.handleSubmit} className='form'>
        <div>
        <h3>
          Create your account by filling out the
          information below.
        </h3>
        </div>
        <div className='form-inputs'>
         <label className='form-label'>Email: </label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='form-inputs'>
        <label className='form-label'>Password: </label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
        
        <div className='form-inputs'>
        <label className='form-label'>Password Confirmation: </label>
          <input
            className="form-input"
            type="password"
            name="password_confirmation"
            placeholder="Enter your password"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='form-inputs'>
        <label className='form-label'>First Name: </label>
        <input
            className="form-input"
            type="first_name"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />
        </div>
        

        <div className='form-inputs'>
        <label className='form-label'>Last Name: </label>
        <input
            className="form-input"
            type="last_name"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='form-inputs'>
        <label className='form-label'>City: </label>
          <input
            className="form-input"
            type="city"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='form-inputs'>
        <label className='form-label'>State: </label>
          <input
            className="form-input"
            type="state"
            name="state"
            placeholder="State Ex: TX"
            value={this.state.state}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className='form-inputs'>
        <label className='form-label'>Handicap: </label>
          <input
            className="form-input"
            type="handicap"
            name="handicap"
            placeholder="Enter your handicap.."
            value={this.state.handicap}
            onChange={this.handleChange}
            required
          />
        </div>

          <button className='form-input-btn' type="submit">Register</button>
         
        </form>
      </div>
    );
  }
}
