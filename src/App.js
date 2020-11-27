import React, { Component } from "react";
import { WiDaySunny, WiMoonWaxingCrescent5 } from "react-icons/wi";

import Home from "./components/home/Home";
import Title from "./components/Title/Title";
import Rules from "./components/rules/Rules";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      darkMode: this.getInitialMode(),
      isNotMobile: false,
    };
    this.getInitialMode = this.getInitialMode.bind(this);
    this.getPrefColorScheme = this.getPrefColorScheme.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    localStorage.setItem("dark", JSON.stringify(this.state.darkMode));

    const width = window.innerWidth;
    if (width > 768) {
      this.setState({
        isNotMobile: true,
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("dark", JSON.stringify(this.state.darkMode));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPreferDark = this.getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPreferDark) {
      return true;
    } else {
      return false;
    }
  }

  getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("prefers-color-scheme: light").matches;
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={this.state.darkMode ? "dark-mode" : "light-mode"}>
        {this.state.isNotMobile && (
          <>
            <span
              align="center"
              onClick={() => this.setState({ darkMode: !this.state.darkMode })}
            >
              {this.state.darkMode ? (
                <>
                  <button className="lightButton">
                    <WiDaySunny size={40} style={{ color: "#f7f7f7" }} />
                    <span>Light</span>
                  </button>
                </>
              ) : (
                <>
                  <button className="darkButton">
                    <WiMoonWaxingCrescent5
                      size={40}
                      style={{ color: "#006790" }}
                    />
                    <span style={{ color: "#006790" }}>Dark</span>
                  </button>
                </>
              )}
            </span>
            <Title />
          </>
        )}
        <Home date={this.state.date} />
        <Rules />
      </div>
    );
  }
}

export default App;
