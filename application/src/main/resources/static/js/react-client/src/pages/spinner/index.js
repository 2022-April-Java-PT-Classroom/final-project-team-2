import React from "react";
// import {Link} from "react-router-dom";
import style from "./style.module.scss";
import fidget from "../../assets/fidget.png";

const Spinner =()=>{

  
    


    return (
        <div className={style.containerSpinner}>
            <div className={style.Spinner}>
            <section id="middle">
            <img className={style.spinnerimg} src={fidget} alt={"fidget"}></img>
          
             </section>
            </div>
        </div>
    ) 
    
}
export default Spinner;