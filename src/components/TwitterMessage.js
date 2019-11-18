import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "",
      charsRemaining: 280
    };
  }

  handleChange = event => {
    const currentCharsRemaining = this.props.maxChars - event.target.value.length

    this.setState({
      [event.target.name]: event.target.value,
      charsRemaining: currentCharsRemaining
    })
    console.log("charsRemaining: " + this.state.charsRemaining);
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} placeholder="Enter msg"/>
        <p>{this.state.charsRemaining} chars remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
