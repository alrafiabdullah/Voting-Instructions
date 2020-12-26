import React, { Component } from "react";

import "./rules.css";

export class Rules extends Component {
  /*

  Do not share the voting form link with anyone else. If someone tells you they did not get the form, tell them to contact the EBs.

You are not allowed to cast a vote on anyone else's behalf. You can only cast your own vote. If you are found to be voting in someone else's name, action will be taken.

You may only vote during the election period. No more votes will be accepted once the period is over.

You may only vote once. You cannot edit your vote after it has been cast.

If you do not follow the rules and instructions properly, your vote may be discarded.

  */

  render() {
    return (
      <div>
        <ul className="list-group list-group-fllush">
          <li className="list-group-item list-group-item-primary">
            Do not share the voting form link with anyone else. If someone tells
            you they did not get the form, tell them to contact the EBs.
          </li>
          <li className="list-group-item list-group-item-primary">
            You are not allowed to cast a vote on anyone else's behalf. You can
            only cast your own vote. If you are found to be voting in someone
            else's name, action will be taken.
          </li>
          <li className="list-group-item list-group-item-primary">
            You may only vote during the election period. No more votes will be
            accepted once the period is over.
          </li>
          <li className="list-group-item list-group-item-primary">
            You may only vote once. You cannot edit your vote after it has been
            cast.
          </li>
          <li className="list-group-item list-group-item-primary">
            If you do not follow the rules and instructions properly, your vote
            may be discarded.
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
            href="https://forms.gle/RPSZcVVGXgtTRJuj8"
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
