import React, { Component } from "react";
import "../commonSyles.css";
import "./Main.Component.css";

import LeftSidebar from "../../components/leftSidebar/LeftSidebar.Component";
import NewsFeed from "../../components/newsFeed/NewsFeed.Component";
import RightSidebar from "../../components/rightSidebar/RightSidebar.Component";

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
