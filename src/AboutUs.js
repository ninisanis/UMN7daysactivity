import "./AboutUs.css";

import avatar1 from "./img/avatar1.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import avatar4 from "./img/avatar4.png";

function AboutUs() {
  return (
    <div className="container-about">
      <h1 className="judul">Our Team</h1>
      <div className="kartu">
        <div className="card-about">
          <img src={avatar1} alt="John" style={{ width: `100%` }}></img>
          <h1>Arsinandana</h1>
          <p className="title-about">Informatika</p>
          <p>Universitas Multimedia Nusantara</p>
          {/*
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <p>
            <button>Contact</button>
          </p>
          */}
        </div>
        <div className="card-about">
          <img src={avatar2} alt="John" style={{ width: `100%` }}></img>
          <h1>Nisa'ul Fadhilah</h1>
          <p className="title-about">Informatika</p>
          <p>Universitas Multimedia Nusantara</p>
          {/*
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <p>
            <button>Contact</button>
          </p>
          */}
        </div>
        <div className="card-about">
          <img src={avatar3} alt="John" style={{ width: `100%` }}></img>
          <h1>Alexa Zeta Y</h1>
          <p className="title-about">Informatika</p>
          <p>Universitas Multimedia Nusantara</p>
          {/*
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <p>
            <button>Contact</button>
          </p>
          */}
        </div>
        <div className="card-about">
          <img src={avatar4} alt="John" style={{ width: `100%` }}></img>
          <h1>Nata Ardia</h1>
          <p className="title-about">Informatika</p>
          <p>Universitas Multimedia Nusantara</p>
          {/*
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <p>
            <button>Contact</button>
          </p>
          */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
