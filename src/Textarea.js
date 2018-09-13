import React, { Component } from "react";

class Textarea extends Component {
  state = {
    message: this.props.value
  };

  setValue = ({ target: { value } }) =>
    this.setState({ message: value }, this.props.onChange(value));

  render() {
    const { maximum = 200 } = this.props;
    return (
      <div className="textarea-wrapper">
        <textarea
          onChange={this.setValue}
          value={this.state.message}
          placeholder="MESSAGE"
          maxLength={maximum}
          style={{ resize: "none" }}
        />

        <span
          style={{
            color: this.state.message.length < maximum ? "" : "#a93f55"
          }}
          className="textarea-counter"
        >
          {this.state.message.length}/{maximum}
        </span>
      </div>
    );
  }
}

export default Textarea;
