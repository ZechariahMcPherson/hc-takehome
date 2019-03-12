import React, { Component } from "react";
import "./Header.Component.css";

export default class Header extends Component {
  render() {
    return (
      <div className="flex-container">
        <span className="flex-align-left">BootsBook</span>
        <span className="flex-align-right">Search</span>
      </div>
    );
  }
}
