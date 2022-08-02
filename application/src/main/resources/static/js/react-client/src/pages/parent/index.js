import React from "react";
import style from "./style.module.scss";

const Parent =()=>{
    return(  <div>
        <div>
            <section className={style.ParentsHome}>
                <div>
                    <h1>Parents Home</h1>
                </div>
                <ul>
                    <li>Child's Emotion Tracker</li>
                    <li>ADHD Resources</li>
                    <li>Autism Resources</li>
                    <li></li>
                </ul>
            </section>
        </div>
    </div>);
}

export default Parent;