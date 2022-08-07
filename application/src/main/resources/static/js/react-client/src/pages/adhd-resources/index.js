import React, {useEffect, useState} from "react";
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
                <div className={style.bookSection}>
                    <h1>Book Section</h1>
                    {adhdbookData.map(adhdbook =>
                        <div className={style.bookText}>
                        <h2>{adhdbook.title}</h2>
                        <h3>{adhdbook.author}</h3>
                        </div>
                        )}
                </div>
                <div className={style.websiteSection}>
                    <h1>Website Section</h1>
                    {adhdwebsiteData.map(adhdwebsite =>
                        <div className={style.bookText}>
                        <h2>{adhdwebsite.title}</h2>
                        <h3>{adhdwebsite.url}</h3>
                        </div>
                        )}
                </div>
            </div>
        )     
}
export default AdhdResources;