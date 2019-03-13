import React, { Component } from "react";
import "./WritePost.Component.css";

export default class RightSidebar extends Component {
  render() {
    return (
      <div className="flex-container write-container">
        <div className="write-header">
          <button className="selected-option">Make a publication</button>
          <button className="not-selected-option">Images</button>
        </div>
        <div className="write-body">
          <textarea
            placeholder="What are you thinking?"
            className="writing-textarea"
          />
        </div>
        <div className="write-footer">
          <button className="button-primary">Share</button>
          <button className="who-can-see" title="who can see your post">
            ?
          </button>
        </div>
      </div>
    );
  }
}
