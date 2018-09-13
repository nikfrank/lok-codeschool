import React, { Component } from "react";
import "./Contact.css";
import Textarea from "./Textarea";
import Correct from "./imgs/correct.svg";
import X from "./imgs/delete-button.svg";

import spinner from "./imgs/fidget-spinner.gif";

import emailRegex from "./emailRegex";

class Contact extends Component {
  state = {
    userName: "",
    email: "",
    message: "",
    sending: false
  };

  setUserName = event => this.setState({ userName: event.target.value });
  setEmail = ({ target: { value } }) =>
    this.setState({
      email: value,
      isEmailValid: value.match(emailRegex)
    });
  setMessage = value => this.setState({ message: value });

  submit = () => {
    this.setState({ sending: true });

    fetch(
      "https://55a1ixk7t8.execute-api.eu-west-1.amazonaws.com/default/test-api-gateway",
      {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body:
          "name: " +
          this.state.userName +
          " email: " +
          this.state.email +
          " message: " +
          this.state.message
      }
    ).then(pon =>
      this.setState({ sending: false }, () =>
        alert("Thanks for contacting Pharmacist Nanci")
      )
    );
  };

  render() {
    const { userName, email, message, sending, isEmailValid } = this.state;

    return (
      <div className="Contact">
        <div className="form-container">
          <h1 className="form-header">Tell us what you think</h1>

          <div className="form topBefore">
            <input
              id="name"
              type="text"
              placeholder="NAME"
              onChange={this.setUserName}
              value={userName}
            />

            <div className="contact-email-div">
              <input
                id="email"
                type="text"
                placeholder="E-MAIL"
                onChange={this.setEmail}
                value={email}
              />
              {!!email.length ? (
                !!isEmailValid ? (
                  <img src={Correct} />
                ) : (
                  <img src={X} />
                )
              ) : null}
            </div>

            <div>
              <Textarea
                id="message"
                type="text"
                maximum={999}
                onChange={this.setMessage}
                value={message}
              />
            </div>

            <button
              className="submit"
              onClick={this.submit}
              disabled={sending || !isEmailValid}
            >
              {!sending ? (
                "SUBMIT"
              ) : (
                <div className="spin-holder">
                  <img className="spinner" src={spinner} />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
