import React, { useState } from "react";

import TimeApp from './time'
import style from './style.module.scss'

function Card(){

    const [name, setDate] = useState("Lucas")
    const [advice, setAdvice] = useState(sessionStorage.getItem('emotion'))
       
    return (
        <div className={style.card}>
            <div className={style.upperContainer}>
            <div className={style.passEmoji}><h1>{sessionStorage.getItem('emotion')}</h1></div>
            </div>
            <div className={style.lowerContainer}>
                <h3>Share by: {name}</h3>
                <TimeApp />
                <h3></h3>
                
                <h4>What can you do?:</h4>
                {advice==='🍕' ? 'I think someone is hungry. There are so many options. You can put together broccoli and hummus or grab a pizza!': ''}
                {advice==='🙂' ? 'Hey! Someone is having a good time. That is great!': ''}
                {advice==='🤨' ? 'I think someone you care about is a little concerned. It is time for quality time. You can do this! 👏': ''}
                {advice==='😥' ? 'It is time to cheer up. Sadness is an emotion that can bring us down very quickly. Let us go play!': ''}
                {advice==='🤣' ? 'You are doing a great job! Now you can relax and enjoy that everyone in the house is happy!': ''}
                {advice==='🏈' ? 'Time to play!! This is a good time to connect and build memories. Go outside and play!': ''}
                {advice==='🤢' ? 'Oh no! Someone is feeling sick. Time to go to the doctor!': ''}
                
                
                
            </div>
        </div>
    )
    
}
  


export default Card;