import React, { Component } from "react";

import "../styles/Copyright.css";

class Copyright extends Component {
  render() {
    return (
      <div className="copyright-component">
        <span>
          &copy;
          <a href={this.props.link} title={this.props.name}>
            {this.props.name}
          </a>
        </span>
      </div>
    );
  }
}

export default Copyright;
