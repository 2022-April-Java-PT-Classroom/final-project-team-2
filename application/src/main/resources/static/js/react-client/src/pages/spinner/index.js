import React from "react";
import {Link} from "react-router-dom";
import style from "./spinner.module.scss";
import fidget from "../../assets/fidget.png";

const Spinner =()=>{
    return (
        <div>
            <div>
            <button className={style.fidget} src={fidget} alt={"fidget"}></button> 
            </div>
        </div>
    ) 
    
}
export default Spinner;