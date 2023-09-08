 import { useEffect, useState } from "react";

const Timer = ({ direction, duration }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (direction === "counterClock") return setTime(duration);
    if (direction === "clock") return setTime(0);
  }, [direction, duration]);

  useEffect(() => {
    let timeId;

    const countDown = () => {
      if (time > 0) {
        timeId = setInterval(() => {
          setTime((pre) => pre - 1);
        }, 1000);
      }
    };

    const countUp = () => {
      if (time < duration) {
        timeId = setInterval(() => {
          setTime((pre) => pre + 1);
        }, 1000);
      }
    };

    if (direction === "counterClock") countDown();
    else if (direction === "clock") countUp();

    return () => clearTimeout(timeId);
  }, [time,direction,duration]);

  return <>{time}</>;
};

export default Timer;
