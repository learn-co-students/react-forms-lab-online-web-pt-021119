import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: "",
      charLength: props.maxChars
    };
  }

  handleCharacters = event => {
 
    this.setState({
      character: event.target.value,
      charSub: this.props.maxChars - event.target.value.length
      })
    }





  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event =>this.handleCharacters(event)} value={this.state.character} />
        <div>
        <p>Characters Left: {this.props.maxChars - this.state.character.length}</p>
        </div>
        </div>
    );
  }
}

export default TwitterMessage;
