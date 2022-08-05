import AdhdVideos from "../adhd-videos";
import EmotionsApp from '../../components/emotions/emotionsApp';
import {Link} from "react-router-dom";
import NotesApp from '../../components/notes/notesApp';
import React from "react";
import checklist from "../../assest/checklist.png";
import creativity from "../../assest/creativity.png";
import style from "./style.module.scss";
import timer from "../../assest/timer.png";
import video from "../../assest/video.png";

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
                        <li> Ckeck list </li>

                        <div class="desc1"></div>
                        <img src={checklist} alt={"checklist"}></img>
           
                        <div class="desc2"></div>
                        <img src={video} alt={"video"}></img>
                        <div class="desc2"></div>
                        <li><Link to={'/adhd-videos'}>adhd video tools</Link></li>

                        <div class="desc3"></div>
                        <li> ADHD Resources</li>
                        <div class="desc3"></div>
                        <img src={creativity} alt={"creativity"}></img>
                        <div class="desc3">Add a description of the image here</div>
                    </ul>
                    
                </section>
                <div className={style.components}>
                    <div className={style.emoComp}>
                    <EmotionsApp/>
                    </div>
                    <div className={style.notesComp}>
                    <NotesApp/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Adhd;