import React from 'react';
import { useState, useEffect } from 'react';
import style from './style.module.scss';
import ReactDOM from "react-dom";
import { render } from "react-dom"
import ReactDom from 'react-dom'; 


class AlarmClock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: '',
      alarmTime: ''
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }

  componentDidMount(){
    this.clock = setInterval(
      () => this.setCurrentTime(),
      1000
    )
    this.interval = setInterval(
      () => this.checkAlarmClock(),
    1000)
  }

  componentWillUnmount(){
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime(){
    this.setState({
      currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ':00'
    this.setState({
      alarmTime: inputAlarmTimeModified
    })
  }

  checkAlarmClock(){
    if(this.state.alarmTime ==='undefined' || !this.state.alarmTime) {
      this.alarmMessage = "Please set your Task alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if(this.state.currentTime === this.state.alarmTime) {
        alert("its time!");
      } else {
        console.log("not yet");
      }
    }   
  }

  render() {
    return (
      <div className={style.timerpage}>
      <div className={style.timerBox}>
        <h1 id={style.timerTitle}>Task Timer </h1>
        <h2 id={style.timercurrentTime}>It is {this.state.currentTime}.
        </h2>
        <h2 id={style.timerMessage}>{this.alarmMessage}
        </h2>
        <form id={style.timersettime}>
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
      </div>
      </div>
    );
  }
}

// ReactDOM.render(
//     <AlarmClock />,
//     document.getElementById('alarm-clock')
// );
// const Timer = () => {
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const deadline = " userInput";

//   // function getUserimput=()=>{
//   //   userInput = 
//   // }

//   const getTime = () => {
//     const time = Date.parse(deadline) - Date.now();

//     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
//     setMinutes(Math.floor((time / 1000 / 60) % 60));
//     setSeconds(Math.floor((time / 1000) % 60));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => getTime(deadline), 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="timer">
//         <div className={style.timerBox}>
//          <ul className={style.timerGrid}>
//             <li>Hours: {hours}</li>
//             <li>Minutes: {minutes}</li>
//             <li>Seconds: {seconds}</li>


//          </ul>
//         </div>
        
//     </div>
//   );
// };

export default AlarmClock;