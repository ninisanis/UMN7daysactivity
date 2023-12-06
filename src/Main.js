import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import book from "./img/book.png";
import happy1 from "./img/happy.png";
import eat from "./img/eat.png";
import sleep1 from "./img/sleeep.png";
import people1 from "./img/people1.gif";
import people2 from "./img/people3.gif";
import people3 from "./img/people4.gif";
import weather from "./img/mist.jpg";
import weather2 from "./img/fewCloud.jpg";
import weather3 from "./img/scatteredCloud.jpg";
import weather4 from "./img/brokenCloud.jpg";
import weather5 from "./img/showerRain.jpg";
import weather6 from "./img/thunderStorm.jpg";
import weather7 from "./img/clear.jpg";
import weather8 from "./img/rain.jpg";
import android from "./img/android.png";
import library from "./img/library.jpg";
import mall from "./img/mall.jpg";
import restaurant from "./img/restaurant.jpg";
import home from "./img/home.jpg";
import News from "./News";
import Stopwatch from "./Stopwatch";

import { useLocation } from "react-router-dom";
import "./Main.css";
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

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-6.2575699&lon=106.6183308&appid=316e6156fcad13a02dce31d7d77d9e1f";

export default function Weather() {
  let avatar = [people1, people2, people3];
  let tombol = [
    ["makan", "tidur", "masak"],
    ["belajar", "kantin"],
    ["nonton", "main"],
    ["makan", "minum"]
  ];
  let tombolUtama = ["Home", "Kampus", "Mall", "Restaurant"];
  let place = [home, library, mall, restaurant];
  const [count, setCount] = useState(0);
  const location = useLocation();
  const dataPeople = location.state;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=-6.2575699&lon=106.6183308&appid=316e6156fcad13a02dce31d7d77d9e1f";

  const [data, setData] = useState();
  let [percentRange, setProgress] = useState(0);
  let [food, setFood] = useState(100);
  let [sleep, setSleep] = useState(100);
  let [happy, setHappy] = useState(100);
  let [evaluasi, setEvaluasi] = useState(0);

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

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let cuaca = data?.weather[0].description;
  console.log(cuaca);
  let bg;
  function bgCuaca(cuaca) {
    if (cuaca === "mist") {
      bg = weather;
    } else if (cuaca === "few clouds") {
      bg = weather2;
    } else if (cuaca === "scattered clouds") {
      bg = weather3;
    } else if (cuaca === "broken clouds") {
      bg = weather4;
    } else if (cuaca === "shower rain") {
      bg = weather5;
    } else if (cuaca === "Thunderstorm") {
      bg = weather6;
    } else if (cuaca === "clear sky") {
      bg = weather7;
    } else {
      bg = weather8;
    }
    return bg;
  }
  function ArrLoop(count) {
    setCount(count);
  }
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="main">
        <div className="weather">
          <img src={bgCuaca(cuaca)} alt="" className="cloud" />
        </div>
        <div className="bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={book} alt="" />
                <ProgressBar percentRange={percentRange} className="book" />
              </div>
              <div className="col">
                <img src={happy1} alt="" />
                <ProgressBarHappy happy={happy} className="book" />
              </div>
              <div className="col">
                <img src={eat} alt="" />
                <ProgressBarFood food={food} className="book" />
              </div>
              <div className="col">
                <img src={sleep1} alt="" />
                <ProgressBarSleep sleep={sleep} className="book" />
              </div>
            </div>
          </div>
        </div>
        <div className="container1" id="gantiBg">
          <div className="left">
            <div className="goto">
              <p>Go To :</p>
              <button onClick={() => ArrLoop(0)} className="button">
                Home
              </button>
              <button onClick={() => ArrLoop(1)} className="button">
                Kampus
              </button>
              <button onClick={() => ArrLoop(2)} className="button">
                Mall
              </button>
              <button onClick={() => ArrLoop(3)} className="button">
                Restoran
              </button>
            </div>
            <div className="news">
              <img src={android} alt="" className="android" />
              <News />
            </div>
          </div>
          <div className="mid">
            <div className="waktu">
              <p>
                <Stopwatch />
              </p>
              <p>Good Morning, {dataPeople.name}</p>
            </div>
            <div
              className="orang"
              style={{
                backgroundImage: `url(${place[count]})`
              }}
            >
              <img
                src={avatar[dataPeople.nomor + 0]}
                alt=""
                className="people"
              />
            </div>
            <div className="aboutUs">
              <Link to="/AboutUs">
                <button className="aboutUsButton">About Us</button>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="act">
              <p>@ {tombolUtama[count]}</p>
              {tombol[count].map(function (element) {
                if (element == "belajar" || element == "masak") {
                  return (
                    <button
                      onClick={() => {
                        if (food === 0 || sleep === 0) {
                          alert("Energimu ga cukup !");
                        } else {
                          setProgress(
                            percentRange < 100 ? percentRange + 20 : 100
                          );
                          setFood(food > 0 ? food - 20 : 0);
                          setSleep(sleep > 0 ? sleep - 20 : 0);
                        }
                      }}
                      className="button"
                    >
                      {element}
                    </button>
                  );
                }
                if (element == "nonton" || element == "main") {
                  return (
                    <button
                      onClick={() => {
                        if (food === 0 || sleep === 0) {
                          alert("Energimu ga cukup !");
                        } else {
                          setHappy(happy < 100 ? happy + 20 : 100);
                          setFood(food > 0 ? food - 20 : 0);
                          setSleep(sleep > 0 ? sleep - 20 : 0);
                        }
                      }}
                      className="button"
                    >
                      {element}
                    </button>
                  );
                } else if (
                  element == "makan" ||
                  element == "kantin" ||
                  element == "minum"
                ) {
                  return (
                    <button
                      onClick={() => {
                        setFood(food < 100 ? food + 20 : 100);
                      }}
                      className="button"
                    >
                      {element}
                    </button>
                  );
                } else if (element == "tidur") {
                  return (
                    <button
                      onClick={() => {
                        setSleep(sleep < 100 ? sleep + 20 : 100);
                      }}
                      className="button"
                    >
                      {element}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
