import React, { useState } from "react";

import style from './style.module.scss'

function Card(){

    const [date, setDate] = useState('8/7/2022')
    const [advice, setAdvice] = useState('Its time to go to the park and have some fun!')
    return (
        <div className={style.card}>
            <div className={style.upperContainer}>
            <div className={style.passEmoji}><h1>{sessionStorage.getItem('emotion')}</h1></div>
            </div>
            <div className={style.lowerContainer}>
                <h3>{date}</h3>
                <h4>Recomendation:</h4>
                <p>{advice}</p>
                
                
            </div>
        </div>
    )
    
}

export default Card;