import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserCard.Component.css";

export default class UserCard extends Component {
  render() {
    return (
      <div className="flex-container user-details-container">
        <div className="general-info">
          @{this.props.userDetails.userName}
          <div className="user-bio">
            <div className="user-fullname">
              Fullname: {this.props.userDetails.fullName}
            </div>
            <div>{this.props.userDetails.bio}</div>
          </div>
        </div>
        <div className="user-follow-div">
          <div className="following-text">Followers</div>
          <div>{this.props.userDetails.followerCount}</div>
        </div>

        <div className="user-follow-div">
          <div className="following-text">Following</div>
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
