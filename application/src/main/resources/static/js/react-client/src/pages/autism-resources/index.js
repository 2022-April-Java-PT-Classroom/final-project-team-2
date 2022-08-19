import React, {useEffect, useState} from "react";

import Axios from "axios";
import {NavLink} from "react-router-dom";
import cloud2 from "../../assets/cloud2.png";
import style from './style.module.scss';

const AutismResources = () => {

    const [autismbookData, setAutismbookData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchAutismbookData = async () => {
            const result = await Axios('http://localhost:8080/pages/autismbook');
            setAutismbookData(result.data);
         }

         fetchAutismbookData()
    }, []);


    const [autismwebsiteData, setAutismwebsiteData] = useState([]);

    useEffect(() => {
        const fetchAutismwebsiteData = async () => {
            const result = await Axios('http://localhost:8080/pages/autismwebsite');
            setAutismwebsiteData(result.data);
         }

         fetchAutismwebsiteData()
    }, []);

  

        return(
            <div className={style.autismresources}>
                <div className={style.autismmain}>
                 <div className={style.banner}>Autism Resources</div>
                    <div className={style.cloud}>
                     <img src={cloud2} alt={"cloud2"}></img>
                    </div>
             </div>
             <h1>Books</h1>
                <section className={style.bookSection}>
                    
                    {autismbookData.map(autismbook =>

                        <div className={style.resourceText}>
                        <p>    
                        <h2>{autismbook.title}</h2>
                        <h3>{autismbook.author}</h3>
                        </p>
                        </div>
                        )}
                </section>

                <h1>Websites</h1>
                <section className={style.websiteSection}>
                    
                    {autismwebsiteData.map(autismwebsite =>

                        <div className={style.websiteLink}>
                        <p>
                        <a href={autismwebsite.url} target="">{autismwebsite.title}</a>
                        </p>
                        </div>
                        )}
                </section>

                <section className={style.parentLink}>    
                    <div>
                    <NavLink to={"/parent"}>Parent Home</NavLink>
                    </div>
               
       </section>


            </div>
        )     
}
export default AutismResources;