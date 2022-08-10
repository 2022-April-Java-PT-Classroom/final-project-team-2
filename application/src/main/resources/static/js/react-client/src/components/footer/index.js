import {AiFillGithub} from 'react-icons/ai'
import React from "react";
import {TbHexagons} from 'react-icons/tb'
import style from "./style.module.scss"

const Footer = () =>{
    return (
        <div className={style.footContainer}>

            <div className={style.leftSide}>
                <h1>Think Differently<TbHexagons/></h1>
                <h4>Change for Good</h4>
            </div>
            <div className={style.rightSide}>
               <a href="https://github.com/2022-April-Java-PT-Classroom/final-project-team-2"><AiFillGithub/></a>
                
            </div>

            <ul className={style.footerList}>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>  
            <li><a href="https://github.com/2022-April-Java-PT-Classroom/final-project-team-2"><i class="uil uil-github"></i></a></li>
            
            </ul>

        </div>
    )
}

export default Footer;