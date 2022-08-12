import Card from './card'
import React from "react";
import style from './style.module.scss'

function CardApp(){
    return(
        <div className={style.cardApp}>
            <Card />
            
        </div>
    )
}

export default CardApp;