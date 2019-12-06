import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: ""};
  }
 
  handleChange = event => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event =>  this.handleChange(event)} type="text" name="message" id="message" value= {this.state.message}/>
        <small>{this.props.maxChars - this.state.message.length} </small>
      </div>
    );
  }
}

export default TwitterMessage;
