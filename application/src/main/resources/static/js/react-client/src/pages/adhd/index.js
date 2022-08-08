import AdhdVideos from "../adhd-videos";
import EmotionsApp from '../../components/emotions/emotionsApp';
import {Link} from "react-router-dom";
import NotesApp from '../../components/notes/notesApp';
import React from "react";
import checklist from "../../assets/checklist.png";
import creativity from "../../assets/creativity.png";
import style from "./style.module.scss";
import timer from "../../assets/timer.png";
import video from "../../assets/video.png";

const Adhd =()=>{
    return(
        <div>
            <div className={style.AdhdHome}>
                <section className={style.AdhdgridBox}>
                    <div>
                        <h1>Adhd tool box</h1>
                    </div>
                    <ul className={style.ADHDGrid}>
                       <img src={timer} alt={"timer"}></img>
                       <div class="desc"></div>
                       <li><Link to={'/alarm-clock'}>Task Timer</Link></li>
                        <li> Ckeck list </li>

                        <div class="desc1"></div>
                        <img src={checklist} alt={"checklist"}></img>
           
                        <div class="desc1"></div>
                        <img src={video} alt={"video"}></img>
                        <div class="desc2"></div>
                        <li><Link to={'/adhd-videos'}>adhd video tools</Link></li>

                        <div class="desc1"></div>
                        <li> ADHD Resources</li>
                        <div class="desc3"></div>
                        <img src={creativity} alt={"creativity"}></img>
                        <div class="desc3">Add a description of the image here</div>
                    </ul> 
                </section>

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
        </div>
    );
}
export default Adhd;