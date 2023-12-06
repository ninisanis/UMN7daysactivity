import Nav from "./Nav";
import arrow from "./img/arrow.png";
import people1 from "./img/people1.gif";
import people2 from "./img/people3.gif";
import people3 from "./img/people4.gif";
import "./Start.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Start() {
  let avatar = [people1, people2, people3];
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  function decrementCount(count) {
    if (count === 0) {
      setCount(3);
    }
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount(count) {
    if (count === 2) {
      setCount(-1);
    }
    setCount((prevCount) => prevCount + 1);
  }
  let myData = {
    nomor: count,
    name: name
  };
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <div className="char">
          <img
            src={arrow}
            alt=""
            className="arrow1"
            onClick={() => decrementCount(count)}
          />
          <img src={avatar[count]} alt="" className="people" />
          <img
            src={arrow}
            alt=""
            className="arrow2"
            onClick={() => incrementCount(count)}
          />
        </div>
        <div className="regis">
          <p>Enter your name here</p>
          <input
            type="text"
            placeholder="Siapa Namamu ?"
            className="prodi"
            onChange={(e) => setName(e.target.value)}
          />
          <select className="prodi">
            <option value="informatika">Informatika</option>
            <option value="dkv">Desain Komunikasi Visual</option>
            <option value="si">Sistem Informasi</option>
            <option value="management">Management</option>
            <option value="ilkom">Ilmu Komunikasi</option>
            <option value="perhotelan">Perhotelan</option>
            <option value="tk">Teknik Kimia</option>
          </select>
          <Link to="/Main" state={myData}>
            <button id="start">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
