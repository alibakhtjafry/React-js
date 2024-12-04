// import React from 'react'
import { useEffect, useRef, useState } from "react";
import "./StopWatch.css";

export default function StopWatch() {
    const [time,updateTime]=useState("00:00:00");
    const [isRunning,setIsRunning]=useState(false);
    const [timeElaspe,setTimeElaspe] = useState(0);
    const intervalIdRef =useRef(null);
    const startTimeRef= useRef(0);
//   const update=()=>{
//     let now=new Date();
//     let hours=formatTime(now.getHours());
//     let minutes = formatTime(now.getMinutes());
//     let seconds = formatTime(now.getSeconds());
//     let newTime='${hours}:${minute}:${seconds}';
//     updateTime(newTime);
//     }
  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current = setInterval(()=>{
        setTimeElaspe(Date.now() - startTimeRef.current);
      },10)
    }
    else {
      clearInterval(intervalIdRef.current);
    }

    return (()=>{
      clearInterval(intervalIdRef.current);
    })

  },[isRunning]);
const start=()=>{
  setIsRunning(true);
  startTimeRef.current=Date.now() - timeElaspe;
}
const stop=()=>{
  setIsRunning(false);
}
const resetTime=()=>{
  setIsRunning(false);
  setTimeElaspe(0);
    updateTime("00:00:00");
};
 
useEffect(() => {
  formatTime(); // Call formatTime to update the time whenever timeElaspe changes
}, [timeElaspe]);

const formatTime=()=>{
  // let hours= Math.floor(timeElaspe / (1000* 60 * 60));
  let minutes= String(Math.floor(timeElaspe / (1000* 60) % 60)).padStart(2,'0');
  let seconds= String(Math.floor(timeElaspe / (1000) % 60)).padStart(2,0);
  let milliseconds= String(Math.floor((timeElaspe % 1000) / 60)).padStart(2,'0');
  
  // return `${minutes}:${seconds}:${milliseconds}`;
  updateTime(`${minutes}:${seconds}:${milliseconds}`);
};
  return (
  <>
  <body>
  <title>Stop Watch</title>
  <h1 id="heading1">Simple Stop Watch</h1>
  <div id="main_div">
    <span id="box"><b>{time}</b></span>
  <div id="div1">
    <button className="btn" onClick={start}>
        Start
    </button>
    <button className="btn" onClick={stop}>
        Stop
    </button>
    <button className="btn" onClick={resetTime}>
        Reset
    </button>
  </div>
  </div>
  <p id="paragraph"> Developed by <br />
    Ali jafry
  </p>
  </body>
  </>
  );
}
