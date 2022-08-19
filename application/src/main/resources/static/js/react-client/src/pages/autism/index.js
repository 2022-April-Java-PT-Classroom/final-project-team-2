import Aubrain from "../../assets/Aubrain.png";
import EmotionsApp from '../../components/emotions/emotionsApp';
import NotesApp from '../../components/notes/notesApp';
import React from "react";
import style from "./style.module.scss";
import video from "../../assets/video.png";
import Spinner1 from "../../assets/Spinner1.png";
import { Link } from 'react-router-dom';



const Autism =()=>{
    return( 
         <div>
        <div className={style.Autis1Home}>
            <section className={style.Autis1Gridbox}>
                <div className={style.autismtitle}>
                    <h1>Autism Tool Box</h1>
                </div>
            <div className={style.autismheroGrid}>

                <div className={style.AutisumheroCards}>
                <img src={Spinner1} alt={"Spinner1"}></img>
                <Link to={'/fidget-spinner'}>Fidget Spinner</Link>
                </div>

                <div className={style.AutisumheroCards}>
                <img src={video} alt={"video"}></img>
                <h2> Autism Videos </h2>
                </div>

                <div className={style.AutisumheroCards}>
                <img src={Aubrain} alt={"Aubrain"}></img>
                <h2> Coloring Page</h2>
                </div>

                <div  className={style.AutisumheroCards}>
                <img src={Aubrain} alt={"Aubrain"}></img>
                <Link to={'/autism-resources'}>Austism Resources</Link>
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