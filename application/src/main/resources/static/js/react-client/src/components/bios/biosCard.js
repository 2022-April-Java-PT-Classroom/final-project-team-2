import React from "react";
import style from "../bios/style.module.scss"

function BioCard(props){
    const {bioiImages, bioTitle, bioDescription, bioSkills, gitHub,linkedIn} = props
  return(
    <div className={style.bioCard}>
        <div className={style.upperContainer}>
            <div className={style.imageDev}>{bioiImages}</div>
        </div>
        <div className={style.lowerContainer}>
            <div className={style.devTitle}>{bioTitle}</div>
            <div className={style.devDesc}>{bioDescription}</div>
            <div className={style.devSkills}>{bioSkills}</div>
            <div className={style.devGit}>{gitHub}</div>
            <div className={style.devLinked}>{linkedIn}</div>
            
                
        </div>
    </div>
  )  
}

export default BioCard;