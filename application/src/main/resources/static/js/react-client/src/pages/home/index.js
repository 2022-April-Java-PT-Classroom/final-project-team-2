import React from "react"
import Adhd from "../../pages/adhd";
import style from "./style.module.scss";
import Autism from "../../pages/autism";
import {Link} from "react-router-dom";


const Home = () => {
    return(
        <div>
            <div className={style.homegrid}>
                <section className={style.homeSection}>
                <h1>Think Differently</h1>
                <p>This is a paragraph</p>
                <img className={style.homeImg}></img>
                <div className={style.homeAdhd}>
                 <Link  to={'/adhd'}>ADHD</Link>
                 </div>
                 <div className={style.homeAutism}>
                 <Link to={'/autism'}>Autism</Link>
                 </div>
                 
                </section><section className={style.homeAutism}>
                <Link to={'/autism'}>Autism</Link>
                </section>
            </div>
        </div>
    )
}


export default Home;
