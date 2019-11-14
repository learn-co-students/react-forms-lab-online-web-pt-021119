import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = event => {
    console.log(event)
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    if (!this.state.password || !this.state.username) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            onChange={this.handlePassword}/>
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
