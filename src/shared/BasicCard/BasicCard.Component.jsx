import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BasicCard.Component.css";

export default class BasicCard extends Component {
  render() {
    return (
      <div className="flex-container card-container">
        <div className="card-header">
          <span className="card-title">{this.props.cardDetails.title}</span>
          <span className="card-subtitle">
            {this.props.cardDetails.subtitle}
          </span>
        </div>

        <div className="card-body">
          <span>{this.props.cardDetails.text}</span>
        </div>
        <div className="card-footer">
          {createLinks(this.props.cardDetails.links)}
        </div>
      </div>
    );
  }
}

BasicCard.propTypes = {
  cardDetails: PropTypes.object.isRequired
};

const createLinks = linkArray => (
  <>
    {console.log(linkArray)}
    {linkArray.map(link => (
      <a href={link.href} key={link.name} className="card-link">
        {link.name}
      </a>
    ))}
  </>
);
