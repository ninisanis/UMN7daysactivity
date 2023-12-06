import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StopWatch() {
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [time, setTime] = useState(0);
  let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const hour = Math.floor((time / 60000) % 60);
  const minute = Math.floor((time / 1000) % 60);

  React.useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  React.useEffect(() => {
    if (minute == 59 && hour == 23) {
      setCount((prev) => {
        if (prev === days.length - 1) {
          return 0;
        }
        return prev + 1;
      });
      if (count == 6) {
        navigate("/Last");
      }
      setTime(0);
    }
  }, [time]);

  return (
    <div className="stop-watch">
      <span className="waktu1">{days[count]} - </span>
      <span className="digits">
        {hour > 24 ? setTime(0) : ("0" + hour).slice(-2)}:
      </span>
      <span className="digits">{("0" + minute).slice(-2)}</span>
    </div>
  );
}

export default StopWatch;
