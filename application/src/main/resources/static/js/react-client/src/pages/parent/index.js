import CardApp from '../../components/comunicationCard/cardApp'
import {Link} from "react-router-dom";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import logo from "../../assets/logo.png";
import style from "./style.module.scss";

const Parent =()=>{
    console.log(sessionStorage.getItem('emotion'));
    return(
     <div className={style.parent}>
       <section className={style.parentSection}>
         <h1>Parent Resources</h1>
          <div className={style.homeLogo}>
                <img src={logo} alt={"logo"}></img>
                </div>
          <div className={style.homeADDbtn}>
                <h2>ADHD Resources</h2>
                <Link to={"/adhd-resources"}><img src={cloud1} alt={"cloud1"}></img></Link>
                
                </div>
                <div className={style.homeAutBtn}>
                <Link to={'/autism-resources'}><img src={cloud2} alt={"cloud2"}></img></Link>
                <h2>Autism Resources</h2>
                </div>
       </section>
        
        <section classname={style.moodSection}>
            <h1>Mood Tracker</h1>
            <div>
                <h2>Communication board</h2>
            </div>
            <CardApp />
        </section>
    </div>);
}

export default Parent;