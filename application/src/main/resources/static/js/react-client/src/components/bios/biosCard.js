import {DiCss3, DiHtml5, DiJava, DiJavascript1, DiReact} from 'react-icons/di'

import React from "react";
import style from "../bios/style.module.scss"

function BioCard(props){
    const {bioName, imageDev, bioTitle, bioDescription, gitHub} = props
  
    let bioPic = `url(${props.imageDev})`
  return(
    <div className={style.bioCard}>
        <div className={style.upperContainer}>
            <div className={style.imgContainer}>
            <img src={props.imageDev} alt="" height='100px' width="100px" />
            
        </div>
        </div>
        <div className={style.lowerContainer}>
            <div className={style.devName}>{bioName}</div>
            <div className={style.devTitle}>{bioTitle}</div>
            <div className={style.devDesc}>{bioDescription}</div>
            <div className={style.devSkills}><DiJava/><DiHtml5/><DiJavascript1/><DiReact/><DiCss3/></div>
            <div className={style.buttons}>
            <button >{gitHub}</button>
            
            </div>
                
        </div>
    </div>
  )  
}

export default BioCard;