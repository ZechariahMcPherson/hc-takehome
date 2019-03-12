import React, { Component } from "react";
import "../commonSyles.css";
import "./Main.Component.css";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar.Component";
import NewsFeed from "../../components/NewsFeed/NewsFeed.Component";
import RightSidebar from "../../components/RightSidebar/RightSidebar.Component";

export default class Main extends Component {
  render() {
    return (
      <div className="flex-container main-container">
        <LeftSidebar />
        <NewsFeed />
        <RightSidebar />
      </div>
    );
  }
}
