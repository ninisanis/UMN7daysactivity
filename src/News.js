import React, { useState } from "react";
import axios from "axios";
import "./news.css";

const url =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=3c2837b3ed5d469b9c3a79d636a4097d";

export default function News() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    const tick = () => setIndex((i) => i + 1);

    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="containers">
        <div className="card">
          <div className="card__header">
            <img
              src={data?.articles[index % data?.articles.length]?.urlToImage}
              alt="card__image"
              className="card__image"
              width="600"
            ></img>
          </div>
          <div className="card__body">
            <h4>{data?.articles[index % data?.articles.length]?.title}</h4>
            <p>{data?.articles[index % data?.articles.length]?.description}</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102647.png?token=exp=1654142319~hmac=8755b6aff1361d75a0371adc33fec944"
                alt="user__image"
                className="user__image"
              ></img>
              <div className="user__info">
                <h5>{data?.articles[index % data?.articles.length]?.author}</h5>
                <small>
                  {data?.articles[index % data?.articles.length]?.publishedAt}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
