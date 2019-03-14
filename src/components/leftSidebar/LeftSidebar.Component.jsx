import React, { Component } from "react";

import UserCard from "../UserCard/UserCard.Component";
import { getUserData } from "../../shared/Data/Data";

export default class LeftSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: {}
    };
  }

  componentDidMount() {
    getUserData().then(response =>
      this.setState({ userDetails: response.data })
    );
  }

  render() {
    const { userDetails } = this.state;
    return (
      <div className="sidebar-width">
        <UserCard userDetails={userDetails} />
      </div>
    );
  }
}
