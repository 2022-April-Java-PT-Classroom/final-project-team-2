import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import cloud1 from "../../assets/cloud1.png";
import video from "../../assets/video.png";
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
        <div className={style.videomain}>
         <div className={style.banner}>ADHD Video Tools</div>
            <div className={style.logo}>
             <img src={video} alt={"video"}></img>
            </div>
     </div>

     <h1>ADHD</h1>
        <div className={style.adhdSection}>      
            {adhdvideoData.map(adhdvideo =>
                <div className={style.adhdvideos}>
                <h2>{adhdvideo.title}</h2>
                <iframe src={adhdvideo.url}></iframe>
                </div>
                )}
        </div>

     <h1>Ted Talks</h1>
        <div className={style.adhdtedxSection}>
            {adhdtedxvideoData.map(adhdtedxvideo =>
                <div className={style.adhdtedxvideos}>
                <h2>{adhdtedxvideo.title}</h2>
                <iframe src={adhdtedxvideo.url}></iframe>
                </div>
                )}
        </div>

     <h1>Organize HGTV</h1>
        <div className={style.adhdorganizeSection}>
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