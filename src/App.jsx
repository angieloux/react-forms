import React, { Component } from "react";
import "./index.css";

const users = [
  {
    email: "test@test.com",
    password: "password",
  },
  {
    email: "test2@test.com",
    password: "password2",
  },
];

// class components are stateful (allow us to use state)
class App extends Component {
  constructor(props) {
    super(props);
    // initialise a state
    this.state = {
      message: "",
      authenticated: false,
      email: "",
      password: "",
    };
  }

  onInputChange = (e) => {
    // e.target.value -> this would show each letter as you type it into the input field
    this.setState({
      // this will update the matching id name that in input with the value (so make sure the input id is the same as name)
      // e.g. this will update both password and email at the same time
      [e.target.id]: e.target.value,
    });
    // this.state.email -> this would be what the user is typing in/ has typed in
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // using controlled components
    const { email, password } = this.state; // will apply the values of this.state.email and this.state.password concurrently to email & password

    // clear the message each time a form is submitted
    this.setState({
      message: "",
    });

    const foundUser = users.find((user) => user.email === email);

    // if the user is found via email, then check the password

    if (foundUser && foundUser.password === password) {
      this.setState({
        message: "You've been authenticated",
        authenticated: true,
      });
    } else {
      // set the state to say the user hasn't been found and you're not authenticated
      this.setState({
        // because state is being used, a constructor must be used in the class
        message: "Wrong credentials have been entered!",
        authenticated: false,
      });
    }
  };
  // The event target (e.target) will be what we binded the input to, so in this case, it will be the form itself.
  // You can access the child elements by using e.target.children. This will give things like the label, inputs, etc.

  // // accessing form data via the DOM (i.e. uncontrolled components)
  // const formElements = e.target.children
  // const emailInput = formElements[1]
  // const passwordInput = formElements[3]
  // const emailValue = emailInput.value
  // const passwordValue = passwordInput.value

  // const foundUser = users.find((user) => (
  //   user.email === emailValue
  // ))
  // if (foundUser) {
  //   // then check the password
  //   if (passwordValue === foundUser.password) {
  //     this.setState({
  //       message: "You've been authenticated",
  //       authenticated: true
  //     })
  //   }
  // } else {
  //   // set the state to say the user hasn't been found and you're not authenticated
  //   this.setState({
  //     // because state is being used, a constructor must be used in the class
  //     message: "Wrong credentials have been entered!",
  //     authenticated: false
  //   })
  // }

  // }

  render() {
    const { message, email, password } = this.state; // access these values without having to prefix them with `this.state` every time (keep code more DRY)
    return (
      <div className="container">
        {/* // If the state is a truthy value (i.e. it has been updated from the itinial state of "", then render out the message in a <p> tag) */}
        <p>{message}</p>

        <h2>Login</h2>

        <form className="login-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="email">Email</label>
          {/* // onChange will fire every time something is typed into the input */}
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.onInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.onInputChange}
          />

          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    );
  }
}
export default App;
