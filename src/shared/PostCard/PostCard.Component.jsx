import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PostCard.Component.css";

const FOOTER_BUTTONS = ["Like", "Comment", "Share"];

export default class PostCard extends Component {
  render() {
    return (
      <div className="flex-container postCard-container">
        <div className="postCard-header">
          <span className="profile-pic">?</span>

          <div className="poster-info">
            <span className="username-style">
              @{this.props.postDetails.author.userName}
            </span>
            <span className="full-name">
              {this.props.postDetails.author.fullName}
            </span>
          </div>

          <div className="flex-align-right post-option">...</div>
        </div>

        <div className="postCard-body">
          <div className="post-body-time-created">
            {this.props.postDetails.createdAt} min ago
          </div>
          <div className="post-body-title">{this.props.postDetails.title}</div>
          <div className="post-body-content">{this.props.postDetails.body}</div>
          <div className="tag-container">
            {createTag(this.props.postDetails.tags)}
          </div>
        </div>
        <div className="postCard-footer">{createButton(FOOTER_BUTTONS)}</div>
      </div>
    );
  }
}

PostCard.propTypes = {
  postDetails: PropTypes.object.isRequired
};

const createTag = tagArray => (
  <>
    {tagArray.map(tag => (
      <span key={tag} className="tag">
        {tag}
      </span>
    ))}
  </>
);

const createButton = buttonArray => (
  <>
    {buttonArray.map(button => (
      <button key={button} className="footer-buttons">
        {button}
      </button>
    ))}
  </>
);
