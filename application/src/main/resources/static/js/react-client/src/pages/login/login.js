import React from "react";
import axios  from "axios";
import cloud1 from "../../assest/cloud1.png";
import cloud2 from "../../assest/cloud2.png";
import logo from "../../assest/logo.png";
import style from './style.module.scss';

const Login =()=>{
    return(  <div className={style.body}>
        <form method='POST'>
      <section className={style.homeSection}>
                <h1>Think Differently</h1>
                <div className={style.homeLogo}>
                <img src={logo} alt={"logo"}></img>
                </div>

                <div className={style.homeADDbtn}>
                <img src={cloud1} alt={"cloud1"}></img>
                </div>
                <div className={style.homeAutBtn}>
                <img src={cloud2} alt={"cloud2"}></img>
                </div>
                </section>
      
    
        Axios.post('http://localhost:8080/api/user/signup', userData).then((response); 
        <h2> Please Sign In</h2>
        <div className={style.inputbox}>
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            <input type="text" name="login" placeholder="Username" required></input>
        </div>
        <div className={style.inputbox}>
        <i className="fab fa-linkedin" aria-hidden="true"></i>
            <input type="password" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
              </input>
        </div>
        <div className={style.inputbox}>
            <input type="submit" name="sign-in" value="Login">
            </input>
        </div>
        <a href="/register">Register</a>
    
    </form>
</div>
);

}


export default Login;