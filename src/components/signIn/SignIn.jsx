import React, { Component } from "react";
import "./SignIn.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            required
            label="email"
          />

          <FormInput
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            type="password"
            required
            label="Password"
          />

          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}
