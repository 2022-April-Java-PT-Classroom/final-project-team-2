import React from "react"
import Adhd from "../../pages/adhd";
import style from "./style.module.scss";
import Autism from "../../pages/autism";
import {Link} from "react-router-dom";
import Parent from "../../pages/parent";
import logo from "../../assest/logo.png";
import cloud1 from "../../assest/cloud1.png";
import cloud2 from "../../assest/cloud2.png";
import Aubrain from "../../assest/Aubrain.png";
import adbrain from "../../assest/adbrain.png";

const Home = () => {
    return(
        <div>
            <div className={style.homegrid}>
                <section className={style.homeSection}>
                <h1>Think Differently</h1>
                <p>Welcome</p>
                <div className={style.homeLogo}>
                <img src={logo} alt={"logo"}></img>
                </div>

                <div className={style.homeADDbtn}>
                <Link to={"/adhd"}><img src={cloud1} alt={"cloud1"}></img></Link>
                </div>
                <div className={style.homeAutBtn}>
                <Link to={'/autism'}><img src={cloud2} alt={"cloud2"}></img></Link>
                </div>
                </section>
                
                <section className={style.homeADHD}>
                <Link to={'/adhd'}>ADHD Tool Box</Link>
                <ul>
                    <p className={style.HOmeADHDULP}> welcome To the world of ADHD</p>
                  <img className={style.ADPageIMG}src={adbrain} alt={"adbrain"}></img>
                    
                </ul>
                </section>

                <section className={style.homeAutism}>
                <Link to={'/autism'}>Autism toolbox</Link>
                <ul>
                    <p className={style.AUThomepara}>Welcome to world of Autism</p>
                    <img className={style.AUtimgHomP} img src={Aubrain} alt={"Aubrain"}></img>
                
                </ul>
                </section>

                <section className={style.homeParent}>
                <Link to={'/parent'}>Parent toolbox</Link>
                <ul>
                    <li><p> Parents Welcome</p></li>
                    <li></li>
                   
                </ul>
                </section>
                
            </div>
        </div>
    )
}


export default Home;
