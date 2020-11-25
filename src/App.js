import "./App.css";
import React, { useState, useEffect } from "react";
import { WiDaySunny, WiMoonWaxingCrescent5 } from "react-icons/wi";

import Home from "./components/home/Home";
import Title from "./components/Title/Title";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const width = window.innerWidth;
    console.log(width);
    if (width > 768) {
      setIsNotMobile(true);
    }
  }, [isNotMobile]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPreferDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPreferDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("prefers-color-scheme: dark").matches;
  }

  return (
    <React.Fragment>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        {isNotMobile && (
          <>
            <span
              align="center"
              onClick={() => setDarkMode((prevMode) => !prevMode)}
            >
              {darkMode ? (
                <>
                  <WiDaySunny size={40} style={{ color: "#f7f7f7" }} />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <WiMoonWaxingCrescent5
                    size={40}
                    style={{ color: "#006790" }}
                  />
                  <span>Dark</span>
                </>
              )}
            </span>
            <Title />
          </>
        )}

        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
