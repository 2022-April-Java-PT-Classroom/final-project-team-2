import React from "react"
import Adhd from "../../pages/adhd";
import style from "./style.module.scss";
import Autism from "../../pages/autism";
import {Link} from "react-router-dom";
import Parent from "../../pages/parent";
import logo from "../../assest/logo.png";


const Home = () => {
    return(
        <div>
            <div className={style.homegrid}>
                <section className={style.homeSection}>
                <h1>Think Differently</h1>
                <p>This is a paragraph</p>
                <div className={style.homeLogo}>
                <img src={logo} alt={"logo"}></img>
                </div>
                <div className={style.homeAdbtn}>
                 <Link  to={'/adhd'}>ADHD</Link>
                 </div>
                 <div className={style.homeAbtn}>
                 <Link to={'/autism'}>Autism</Link>
                 </div>
                 </section>
                 <section className={style.homeADHD}>
                <Link to={'/adhd'}>adhd tool box</Link>
                </section>
                <section className={style.homeAutism}>
                <Link to={'/autism'}>Autism toolbox</Link>
                </section>
                <section className={style.homeParent}>
                <Link to={'/parent'}>Parent toolbox</Link>
                </section>
                
            </div>
        </div>
    )
}


export default Home;
