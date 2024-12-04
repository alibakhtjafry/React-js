// import React from 'react'
import { useState } from "react"
import "./Dark.css"
//not valid in react hence we have to do it in jsx
// let changeMode =()=>{
//     let styleComponenet=window.getComputedStyle(document.body);
//     let backgroundcolor=styleComponenet.backgroundColor.trim();
//     let headingColor= window.getComputedStyle(document.getElementById("heading1")).color.trim();
//     if(headingColor==="rgb(255, 255, 255)"){
//         document.getElementById("heading1").style.color="black";
//     }
//     else{
//         document.getElementById("heading1").style.color="white";
//     }
//     if(backgroundcolor==="rgb(255, 255, 255)"){
//        document.body.style.backgroundColor="black";
//     }
//     else{
//         document.body.style.backgroundColor="white";
//     }
// };

  
export default function DarkMode() {
    const [mode, setMode] = useState("light"); // Corrected state setter function name
    const changeBodyColor=(m)=>{
        document.body.classList.remove("light","dark");
        document.body.classList.add(m);
        console.log("Inside body color: ",m);
        
    }
    const toggle = () => {
        console.log(mode);
        if (mode === "light") {
            setMode("dark"); // Correctly updating state using setMode
            changeBodyColor("dark");
        } else {
            setMode("light");
            changeBodyColor("light");
        }
    };
   
  return (
    <>
    <body className={mode}>
        
    <title>Dard Mode Application</title>
    <h1>Dard Mode Converter</h1>
    <div>
        <button id="btn1" onClick={toggle} >
         <b>Dark/Bright</b> 
        </button>
    </div>

    </body>
    </>
  );
}