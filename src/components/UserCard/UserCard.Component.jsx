import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserCard.Component.css";

export default class UserCard extends Component {
  render() {
    return (
      <div className="flex-container user-details-container">
        <div className="general-info">
          <div className="username">@{this.props.userDetails.userName}</div>
          <div>Fullname: {this.props.userDetails.fullName}</div>
          <div>{this.props.userDetails.bio}</div>
        </div>

        <div className="user-follow-div">
          <div>Followers</div>
          <div>{this.props.userDetails.followerCount}</div>
        </div>

        <div className="user-follow-div">
          <div>Following</div>

          <div>{this.props.userDetails.followingCount}</div>
        </div>

        <div className="some-footer">
          <span>{this.props.userDetails.footer}</span>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  userDetails: PropTypes.object.isRequired
};
