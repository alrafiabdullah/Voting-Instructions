import React, { useState } from "react";
import { useTrail, a } from "react-spring";

import "./title.css";

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 2000, friction: 1000 },
    opacity: open ? 1 : 1,
    x: open ? 20 : 0,
    height: open ? 110 : 110,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

function Title() {
  const [open, set] = useState(true);
  return (
    <Trail className="try" open={open} onClick={() => set((state) => !state)}>
      {open ? (
        <>
          <span>NSU </span>
          <span>ACM </span>
          <span>SC</span>
        </>
      ) : (
        <>
          <span>Vote </span>
          <span>Fall </span>
          <span>2020</span>
        </>
      )}
    </Trail>
  );
}

export default Title;
