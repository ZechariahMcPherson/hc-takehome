import React, { Component } from "react";
import "./Header.Component.css";
import "../commonSyles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="flex-container header-container">
        <span className="flex-align-left">BootsBook</span>
        <span className="flex-align-right">Search</span>
      </div>
    );
  }
}
