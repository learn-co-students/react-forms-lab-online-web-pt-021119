import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    // this = event?
    event.preventDefault()

    if (!(this.state.username.length == 0)
     && !(this.state.password.length == 0)) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <p>State: [{this.state.username}] & [{this.state.password}]</p>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
