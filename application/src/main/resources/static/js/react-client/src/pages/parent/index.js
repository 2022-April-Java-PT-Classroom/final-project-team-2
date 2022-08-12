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
      <div className={style.parentHero}>
          <div className={style.pTitle}>Parent Resources
          
          </div>
          <div className={style.pLogo}>
              <img src={logo} alt={"logo"}></img>
          </div>
        
      </div>
       <section className={style.parentSection}>
        
          <div className={style.homeADDbtn}>
                <Link to={"/adhd-resources"}><img src={cloud1} alt={"cloud1"}></img></Link>
                <h2>ADHD Resources</h2>
                </div>
                <div className={style.homeAutBtn}>
                <Link to={'/autism-resources'}><img src={cloud2} alt={"cloud2"}></img></Link>
                <h2>Autism Resources</h2>
                </div>
       </section>
        
        <section classname={style.moodSection}>
            <div className={style.moodText}>
              <h1>Mood Tracker</h1>
              <p>In this section you will find what your children what to share with you</p>
              </div>
            <div>
              <CardApp />
            </div>
            
        </section>
        <div className={style.parentHero}>
          <div className={style.pTitle}>100% Positive
          
          </div>
          <div className={style.pLogo}>
              <img src={logo} alt={"logo"}></img>
          </div>
        
      </div>
    </div>);
}

export default Parent;