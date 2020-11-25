import React from "react";

import "./card.css";

function Card() {
  return (
    <div>
      <ul
        className="list-group list-group-fllush"
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
        </li>
        <li className="list-group-item list-group-item-primary dark-mode">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci, neque!.
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
          href="https://voteacm.herokuapp.com"
          className="btn btn-info mt-3"
          style={{ marginRight: "40%", marginLeft: "40%" }}
        >
          Vote
        </a>
      </div>
    </div>
  );
}

export default Card;
