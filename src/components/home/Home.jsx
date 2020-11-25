import React from "react";
import $ from "jquery";
import ReactNotification, { store } from "react-notifications-component";
import Card from "./Card/Card";

import "react-notifications-component/dist/theme.css";

function Home() {
  function scrollNotification() {
    $(window).on("load", () => {
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
    });
  }

  return (
    <div onLoad={scrollNotification()} className="mt-5">
      <ReactNotification />
      <div>
        <h3 className="container">Voting Rules of the Fall 2020 Election</h3>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
