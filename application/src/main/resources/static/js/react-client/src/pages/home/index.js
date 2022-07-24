import React from "react"
import Adhd from "../../pages/home";
import style from "./style.module.scss";


const Home = () => {
    return(
        <div>
            <div className={style.homegrid}>
                <h1>Think Differently</h1>
                <p>This is a paragraph</p>
                <a href={Adhd}>ADHD</a>
                <button>Autism</button>

            </div>
        </div>
    )
}


export default Home;
