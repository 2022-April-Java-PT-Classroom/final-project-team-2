import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import style from './style.module.scss';
import Axios from "axios";



const AdhdVideos = () => { 
    
    const [adhdvideoData, setAdhdvideoData] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        const fetchAdhdvideoData = async () => {
            const result = await Axios('http://localhost:8080/pages/adhdvideo');
            setAdhdvideoData(result.data);
         }

         fetchAdhdvideoData()
    }, []);


    const [adhdtedxvideoData, setAdhdtedxvideoData] = useState([]);

    useEffect(() => {
        const fetchAdhdtedxvideoData = async () => {
            const result = await Axios('http://localhost:8080/pages/adhdtedxvideo');
            setAdhdtedxvideoData(result.data);
         }

         fetchAdhdtedxvideoData()
    }, []);


    const [adhdorganizevideoData, setAdhdorganizevideoData] = useState([]);

    useEffect(() => {
        const fetchAdhdorganizevideoData = async () => {
            const result = await Axios('http://localhost:8080/pages/adhdorganizevideo');
            setAdhdorganizevideoData(result.data);
         }

         fetchAdhdorganizevideoData()
    }, []);
    
  
     return(
    
        <div className={style.adhdvideo}>
        <div className={style.adhdSection}>
            <h1>ADHD Section</h1>
            {adhdvideoData.map(adhdvideo =>
                <div className={style.adhdvideos}>
                <h2>{adhdvideo.title}</h2>
                <iframe src={adhdvideo.url}></iframe>
                </div>
                )}
        </div>
        <div className={style.adhdtedxSection}>
            <h1>Ted Talks Section</h1>
            {adhdtedxvideoData.map(adhdtedxvideo =>
                <div className={style.adhdtedxvideos}>
                <h2>{adhdtedxvideo.title}</h2>
                <iframe src={adhdtedxvideo.url}></iframe>
                </div>
                )}
        </div>
        <div className={style.adhdorganizeSection}>
            <h1>Organize HGTV Section</h1>
            {adhdorganizevideoData.map(adhdorganizevideo =>
                <div className={style.adhdorganizevideos}>
                <h2>{adhdorganizevideo.title}</h2>
                <iframe src={adhdorganizevideo.url}></iframe>
                </div>
                )}
        </div>
    </div>
    )
}
export default AdhdVideos;