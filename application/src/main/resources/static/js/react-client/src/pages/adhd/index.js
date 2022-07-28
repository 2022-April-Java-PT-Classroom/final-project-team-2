import React from "react";
import style from "./style.module.scss";
import AdhdVideos from "../adhd-videos";
import {Link} from "react-router-dom";

const Adhd =()=>{
    return(
        <div>
            <div className={style.AdhdHome}>
                <section>
                    <div>
                        <h1>Adhd tool box</h1>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li><Link to={'/adhd-videos'}>adhd video tools</Link></li>
                        <li></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
export default Adhd;