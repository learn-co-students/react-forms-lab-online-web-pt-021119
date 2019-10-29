import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charCount: props.maxChars
    };
  }

  updateMessage = event => {
    this.setState({
      message: event.target.value,
      charCount: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={ event => this.updateMessage(event) } value={ this.state.message }/>
        <div>
          <p>Remaining characters: { this.state.charCount }</p>
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
