import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { earnedData } from "../../../data/data";

import styles from "./EarnedWolf.module.css";

const EarnedWolf = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
  return (
    <div>
      <ReactVisibilitySensor
        offset={{ top: 10 }}
        delayedCall={true}
        onChange={onVisibilityChange}
      >
        <div className={styles.StateSction}>
          {earnedData?.slice(0, 3).map((n) => (
            <div className={styles.Card} key={n?.id}>
              <p> {n?.text}</p>
              <h2>
                <CountUp
                  duration={5}
                  start={0}
                  end={countStart ? n?.title : 0}
                />{" "}
                {n?.tag}
              </h2>
            </div>
          ))}
        </div>
      </ReactVisibilitySensor>
    </div>
  );
};

export default EarnedWolf;
