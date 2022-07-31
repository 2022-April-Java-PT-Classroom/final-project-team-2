import React from 'react';
import { useState, useEffect } from 'react';
import style from './style.module.scss';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = " userInput";

  // function getUserimput=()=>{
  //   userInput = 
  // }

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
        <div className={style.timerBox}>
         <ul className={style.timerGrid}>
            <li>Hours: {hours}</li>
            <li>Minutes: {minutes}</li>
            <li>Seconds: {seconds}</li>


         </ul>
        </div>
        
    </div>
  );
};

export default Timer;