import React, {Component} from 'react';
import './index.css'

const users = [
  {
    email: "test@test.com",
    password: "password"
  },
  {
    email: "test2@test.com",
    password: "password2"
  }
]


class App extends Component {
  constructor(props) {
    super(props)
    // initialise a state
    this.state = {
      message: "",
      authenticated: false
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    // clear the message each time a form is submitted
    this.setState({
      message: ''
    })
    // The event target (e.target) will be what we binded the input to, so in this case, it will be the form itself.
    // You can access the child elements by using e.target.children. This will give things like the label, inputs, etc. 

    // accessing form data via the DOM (i.e. uncontrolled components)
    const formElements = e.target.children
    const emailInput = formElements[1]
    const passwordInput = formElements[3]
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value

    const foundUser = users.find((user) => (
      user.email === emailValue
    ))
    if (foundUser) {
      // then check the password
      if (passwordValue === foundUser.password) {
        this.setState({
          message: "You've been authenticated",
          authenticated: true
        })
      }
    } else {
      // set the state to say the user hasn't been found and you're not authenticated
      this.setState({
        // because state is being used, a constructor must be used in the class
        message: "Wrong credentials have been entered!",
        authenticated: false
      })
    }

  }
// If the state is a truthy value (i.e. it has been updated from the itinial state of "", then render out the message in a <p> tag)
  render() {
    console.log(users)
    return (
      <div className ="container">
        <p>{this.state.message}</p>

        <h2>Login</h2>
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          
          <input type="submit" value="Submit" id="submit"  />
        </form>
      </div>
    )
  }
}
export default App;
