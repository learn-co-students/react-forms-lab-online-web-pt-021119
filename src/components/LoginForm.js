import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const u = this.state.username;
    const p = this.state.password
    
    if(u && p) this.props.handleLogin(u, p);
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <div>
          <label>
            Username
            <input id="username"
              name="username"
              type="text"
              value={ this.state.username }
              onChange={ event => this.handleInputChange(event) } />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
              name="password"
              type="password"
              value={ this.state.password }
              onChange={ event => this.handleInputChange(event) } />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
