import React, {useState}from "react";

import style from "./style.module.scss";

function Card({emoji,childName,advice,dateSubmit}) {
    
       
  return (
    <div className={style.cardContainer}>
        <div className={style.imageContainer}>
            <h3>{emoji}</h3>
            
        </div>
        <div className={style.lowerContainer}>
            
            <h2>{childName}</h2>
            <h4>Advice: {advice}</h4>
            <h4>Date: {dateSubmit}</h4>
        </div>
        
    </div>
  )  
}

export default Card