import React, { Component } from "react";
import ReactNotification, { store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
import "./home.css";

export class Home extends Component {
  componentDidMount() {
    store.addNotification({
      title: "Notification from ACM Vote!",
      message:
        "This website is still in progress.\nThank you for visiting!!! 🥇",
      type: "info",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],

      dismiss: {
        duration: 5000,
        onScreen: true,
        showIcon: true,
      },
    });
  }

  render() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (
      <React.Fragment>
        <ReactNotification />
        <div className="home">
          <h3>Voting Rules of the Fall 2020 Election</h3>
          <h5>Date: {this.props.date.toLocaleDateString("en-GB", options)}</h5>
          <h5>Time: {this.props.date.toLocaleTimeString()}</h5>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
