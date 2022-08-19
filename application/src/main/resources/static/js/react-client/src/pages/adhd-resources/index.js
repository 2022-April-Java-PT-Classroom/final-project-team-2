import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import cloud1 from "../../assets/cloud1.png";
import style from './style.module.scss';
import Axios from "axios";


const AdhdResources = () => {

    const [adhdbookData, setAdhdbookData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchAdhdbookData = async () => {
            const result = await Axios('http://localhost:8080/pages/adhdbook');
            setAdhdbookData(result.data);
         }

         fetchAdhdbookData()
    }, []);


    const [adhdwebsiteData, setAdhdwebsiteData] = useState([]);

    useEffect(() => {
        const fetchAdhdwebsiteData = async () => {
            const result = await Axios('http://localhost:8080/pages/adhdwebsite');
            setAdhdwebsiteData(result.data);
         }

         fetchAdhdwebsiteData()
    }, []);

  

        return(
          <div className={style.adhdresources}>
            <div className={style.adhdmain}>
                 <div className={style.banner}>ADHD Resources</div>
                    <div className={style.cloud}>
                     <img src={cloud1} alt={"cloud1"}></img>
                    </div>
             </div>
             <h1>Books</h1>
                <section className={style.bookSection}>
                    
                    {adhdbookData.map(adhdbook =>

                        <div className={style.resourceText}>
                        <p>    
                        <h2>{adhdbook.title}</h2>
                        <h3>{adhdbook.author}</h3>
                        </p>
                        </div>
                        )}
                </section>

                <h1>Websites</h1>
                <section className={style.websiteSection}>
                    
                    {adhdwebsiteData.map(adhdwebsite =>

<div className={style.websiteLink}>
<p>
<a href={adhdwebsite.url} target="_blank">{adhdwebsite.title}</a>
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
export default AdhdResources;