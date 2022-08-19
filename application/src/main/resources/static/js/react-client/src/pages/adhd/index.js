import AdhdVideos from "../adhd-videos";
import EmotionsApp from '../../components/emotions/emotionsApp';
import {Link} from "react-router-dom";
import NotesApp from '../../components/notes/notesApp';
import React from "react";
import checklist from "../../assets/checklist.png";
import resore from "../../assets/resore.png";
import style from "./style.module.scss";
import timer from "../../assets/timer.png";
import video from "../../assets/video.png";
import fidget from "../../assets/fidget.png";

const Adhd =()=>{
    return(
        <div>
            <div className={style.AdhdHome}>
                <section className={style.AdhdgridBox}>
                    <div className={style.Adhdtitle}>
                        <h1>ADHD Tool Box</h1>
                    </div>
                    <div className={style.ADHDheroGrid}>
                        <div  className={style.ADHDheroCards}>
                       <img src={timer} alt={"timer"} ></img>
                       <div class="desc"></div>
                       <h2><Link to={'/alarm-clock'}>Task Timer</Link></h2>
                        
                        </div>

                        <div className={style.ADHDheroCards}>
                        <img src={fidget} alt={"fidget"}></img>
                        <h2> Fidget Spinner </h2>
                        </div>
           
                        <div className={style.ADHDheroCards}>
                        <img src={video} alt={"video"}></img>
                        {/* <div class="desc"></div> */}
                        <h2><Link to={'/adhd-videos'}>ADHD Video Tools</Link></h2>
                        </div>

                        <div className={style.ADHDheroCards}>
                        <img src={resore} alt={"resore"}></img>
                        <h2><Link to={'/adhd-resources'}>ADHD Resources</Link></h2>
                        <div class="desc"></div>
                       
                        </div>
                         {/* <img className={style.fidget} src={fidget} alt={"fidget"}></img> */} */}
                    </div> 
                </section>
            </div>
                <section>
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
    );
}
export default Adhd;