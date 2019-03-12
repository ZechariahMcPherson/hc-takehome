import React, { Component } from "react";
import PropTypes from "prop-types";
import "../commonSyles.css";
import "./PostCard.Component.css";

export default class PostCard extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="postCard-header">
          {this.props.postDetails.author.fullName}
        </div>
        <div className="postCard-body">Body</div>
        <div className="postCard-footer">Footer</div>
      </div>
    );
  }
}

PostCard.propTypes = {
  postDetails: PropTypes.object.isRequired
};
