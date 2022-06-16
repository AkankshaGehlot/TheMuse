import {Component} from "react";
import React from "react";
import '../src/components/form-input/form-input.component';
import { FormInputLabel } from "./components/form-input/form-input.styles";

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
              <div  style={{background:"black" , width:"auto"}}>
          <div className="username" style={{color:"blue"}}>
            {member.clientData.username}
          </div>
    <h1 style={{color:"red"}}>{text}</h1>
        </div>
      </li>
    );
  }
}

export default Messages;
