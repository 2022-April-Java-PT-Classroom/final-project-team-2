import EmotionsApp from '../../components/emotions/emotionsApp';
import NotesApp from '../../components/notes/notesApp';
import React from "react";
import style from "./style.module.scss";
import video from "../../assets/video.png";
import Aubrain from "../../assets/Aubrain.png";
import Spinner1 from "../../assets/Spinner1.png";
import { Link } from 'react-router-dom';




const Autism =()=>{
    return( 
         <div>
        <div className={style.Autis1Home}>
            <section className={style.Autis1Gridbox}>
                <div className={style.autismtitle}>
                    <h1>Autism tool box</h1>
                </div>
            <div className={style.autismheroGrid}>

                <div className={style.AutisumheroCards}>
                <img src={Spinner1} alt={"Spinner1"}></img>
                <Link to={'/fidget-spinner'}>Fidget Spinner</Link>
                </div>

                <div className={style.AutisumheroCards}>
                <img src={video} alt={"video"}></img>
                <p> Autism Videos </p>
                </div>

                <div className={style.AutisumheroCards}>
                <img src={Aubrain} alt={"Aubrain"}></img>
                <p> place holder</p>
                </div>

                <div  className={style.AutisumheroCards}>
                <img src={Aubrain} alt={"Aubrain"}></img>
                    <p> place holder </p>
                </div>
            </div>
            </section>
            <section className={style.auemo}>
            <div className={style.components}>
                    <div className={style.emoComp}>
                    <EmotionsApp/>
                    </div>
                    <div className={style.notesComp}>
                    <NotesApp/>
                    </div>
                </div>
            </section>
        </div>
    </div>);

}
export default Autism;