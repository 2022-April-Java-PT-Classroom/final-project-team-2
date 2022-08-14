import EmotionsApp from '../../components/emotions/emotionsApp';
import NotesApp from '../../components/notes/notesApp';
import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import spinner1 from "../../assets/spinner1.png";


const Autism =()=>{
    return(
        <div className={style.parent}>
      <div className={style.parentHero}>
          <div className={style.pTitle}>Autism Tool Box
          
          </div>
          <div className={style.pLogo}>
              <img src={logo} alt={"logo"}></img>
          </div>
        
      </div>
       <section className={style.parentSection}>
        
          <div className={style.spinnerbtn}>
                <Link to={"/fidget-spinner"}><img src={spinner1} alt={"spinner1"}></img></Link>
                <h2>Fidget Spinner</h2>
                </div>
               
       </section>
       </div>
    );
}
export default Autism;