import React, { Component } from "react";
import "./Header.Component.css";

export default class Header extends Component {
  render() {
    return (
      <div className="flex-container header-container">
        <span className="flex-align-left">BootsBook</span>
        <input placeholder="search" className="search-input" />
      </div>
    );
  }
}
