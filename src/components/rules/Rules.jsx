import React, { Component } from "react";

import "./rules.css";

export class Rules extends Component {
  render() {
    return (
      <div>
        <ul className="list-group list-group-fllush">
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
            molestiae!
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
          <li className="list-group-item list-group-item-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            veniam?
          </li>
        </ul>
        <div className="confirmation alert alert-success">
          <p>Have you read the rules thoroughly?</p>
          <button
            className="btn btn-success"
            onClick={() => {
              document.querySelector(".confirm").style.display = "block";
              document.querySelector(".confirmation").style.display = "none";
            }}
          >
            Yes
          </button>
        </div>
        <div className="alert alert-info confirm">
          <a
            href="https://voteacm.herokuapp.com/vote/1"
            className="btn btn-info mt-3"
            style={{ marginRight: "40%", marginLeft: "40%" }}
          >
            Vote
          </a>
        </div>
      </div>
    );
  }
}

export default Rules;
