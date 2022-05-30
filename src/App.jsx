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
  render() {
    console.log(users)
    return (
      <div className ="container">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    )
  }
}
export default App;
