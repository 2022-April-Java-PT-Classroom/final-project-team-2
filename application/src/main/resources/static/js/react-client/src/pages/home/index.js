import React from "react"
import style from "./style.module.scss";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import Aubrain from "../../assets/Aubrain.png";
import adbrain from "../../assets/adbrain.png";

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
                    <p className={style.HOmeADHDULP}> Welcome To the world of ADHD</p>
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
                
                    <h1> Parents Welcome</h1>
                    <p>TIPS FOR CAREGIVERS
Resources, information, ideas, and advice
There isn’t a handbook on how to raise a child with ADHD.
 Explore information, support, toolbox.</p>
                    
                   
                
                </section>
                
            </div>
        </div>
    )
}


export default Home;
