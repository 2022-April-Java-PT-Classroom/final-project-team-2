import React from "react";
import style from "../bios/style.module.scss"

function BioCard(props){
    const {bioName, imageDev, bioTitle, bioDescription, bioSkills, gitHub} = props
    // let bioPic = `url(${props.image})`
  return(
    <div className={style.bioCard}>
        <div className={style.upperContainer}>
            <div className={style.imgContainer}>
            <img src={imageDev} alt="" height='100px' width="100px" />
            {/* <div className={style.imageDev} style={{"background-Image": bioPic}}></div> */}
        </div>
        </div>
        <div className={style.lowerContainer}>
            <div className={style.devName}>{bioName}</div>
            <div className={style.devTitle}>{bioTitle}</div>
            <div className={style.devDesc}>{bioDescription}</div>
            <div className={style.devSkills}>{bioSkills}</div>
            <div className={style.buttons}>
            <button >{gitHub}</button>
            {/* <button >{linkedIn}</button> */}
            </div>
                
        </div>
    </div>
  )  
}

export default BioCard;