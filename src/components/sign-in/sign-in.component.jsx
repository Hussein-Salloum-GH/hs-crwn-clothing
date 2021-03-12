import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       email: "",
  //       password: "",
  //     };
  //   }

  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          {/* <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label> */}

          <FormInput
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          {/* <input type="submit" value="Submit Form" /> */}
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleButton>
              Sign In With Google
            </CustomButton>
          </div>
          {/* <CustomButton type="submit">Sign In with google</CustomButton> */}
        </form>
      </div>
    );
  }
}

export default SignIn;
