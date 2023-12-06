// ProgressBar.js

import React, { useState } from "react";
import "./progress-bar.css";
import book from "./img/book.png";
import happy1 from "./img/happy.png";
import eat from "./img/eat.png";
import sleep1 from "./img/sleeep.png";

const Range = (props) => {
  return <div className="range" style={{ width: `${props.percentRange}%` }} />;
};
const RangeHappy = (props) => {
  return <div className="range" style={{ width: `${props.happy}%` }} />;
};

const RangeFood = (props) => {
  return <div className="range" style={{ width: `${props.food}%` }} />;
};
const RangeSleep = (props) => {
  return <div className="range" style={{ width: `${props.sleep}%` }} />;
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Range percentRange={props.percentRange} />
    </div>
  );
};
const ProgressBarHappy = (props) => {
  return (
    <div className="progress-bar">
      <RangeHappy happy={props.happy} />
    </div>
  );
};

const ProgressBarFood = (props) => {
  return (
    <div className="progress-bar">
      <RangeFood food={props.food} />
    </div>
  );
};
const ProgressBarSleep = (props) => {
  return (
    <div className="progress-bar">
      <RangeSleep sleep={props.sleep} />
    </div>
  );
};

export const ProgressBarContainer = () => {
  let [percentRange, setProgress] = useState(100);
  let [food, setFood] = useState(0);
  let [sleep, setSleep] = useState(0);
  let [happy, setHappy] = useState(0);

  React.useEffect(() => {
    const tick = () => setProgress((i) => (i > 0 ? i - 10 : 0));

    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const tick = () => setFood((i) => (i > 0 ? i - 10 : 0));

    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const tick = () => setSleep((i) => (i > 0 ? i - 10 : 0));

    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const tick = () => setHappy((i) => (i > 0 ? i - 10 : 0));

    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="lebar">
          <div className="col">
            <img src={book} alt="" />
            <ProgressBar percentRange={percentRange} />
          </div>
          <div className="col">
            <img src={happy1} alt="" />
            <ProgressBarHappy happy={happy} />
          </div>
        </div>
        <div className="lebar">
          <div className="col">
            <img src={eat} alt="" />
            <ProgressBarFood food={food} />
          </div>
          <div className="col">
            <img src={sleep1} alt="" />
            <ProgressBarSleep sleep={sleep} />
          </div>
        </div>
      </div>

      <div className="toggle-buttons">
        <button
          onClick={() => {
            if (food === 0 || sleep === 0) {
              alert("Energimu ga cukup buat ke kampus, Makan dulu!");
            } else {
              setProgress(percentRange < 100 ? percentRange + 20 : 100);
              setFood(food > 0 ? food - 20 : 0);
              setSleep(sleep > 0 ? sleep - 20 : 0);
            }
          }}
        >
          Goto Kampus
        </button>
        <button
          onClick={() => {
            if (food === 0 || sleep === 0) {
              alert("Energimu ga cukup buat ke kampus, Makan dulu!");
            } else {
              setHappy(happy < 100 ? happy + 20 : 100);
              setFood(food > 0 ? food - 20 : 0);
              setSleep(sleep > 0 ? sleep - 20 : 0);
            }
          }}
        >
          mall
        </button>
        <button
          onClick={() => {
            setFood(food < 100 ? food + 20 : 100);
          }}
        >
          Eat
        </button>
        <button
          onClick={() => {
            setSleep(sleep < 100 ? sleep + 20 : 100);
          }}
        >
          Sleep
        </button>
      </div>
    </div>
  );
};
