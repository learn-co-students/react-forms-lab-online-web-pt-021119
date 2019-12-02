import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charLeft: this.props.maxChars
    };
  }

  handleChange = event => {

    this.setState({
      message : event.target.value,
      charLeft : this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        onChange={event => this.handleChange(event)}
        value={this.state.message}/> <strong>{this.state.charLeft}</strong> chars left
      </div>
    );
  }
}

export default TwitterMessage;
