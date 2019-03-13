import React, { Component } from "react";

import { getRightSidebarCardData } from "../../shared/Data/Data";
import BasicCard from "../../shared/BasicCard/BasicCard.Component";

export default class RightSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: []
    };
  }

  componentDidMount() {
    getRightSidebarCardData().then(response =>
      this.setState({ cardData: response.data })
    );
  }

  render() {
    const { cardData } = this.state;
    console.log(cardData);
    return <div className="sidebar-width">{createCard(cardData)}</div>;
  }
}

const createCard = cardArray => (
  <>
    {cardArray.map(card => (
      <BasicCard cardDetails={card} />
    ))}
  </>
);
