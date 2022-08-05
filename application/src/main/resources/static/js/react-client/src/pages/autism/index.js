import EmotionsApp from '../../components/emotions/emotionsApp';
import NotesApp from '../../components/notes/notesApp';
import React from "react";
import style from "./style.module.scss";

const Autism =()=>{
    return(  <div>
        <div>
            <section>
                <div>
                    <h1>Autism tool box</h1>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
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
    </div>);

}
export default Autism;