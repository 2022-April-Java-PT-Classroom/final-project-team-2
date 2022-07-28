import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Axios  from "axios";
import { IframeHTMLAttributes } from "react";
// import {googleapi} from "googleapi";



const AdhdVideos =()=>{
    
    const [video,setVideo] = useState(null);
    const [loading,setLoading]= useState(true);


    // fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLhIJgpRusByNX2XARV4jJ29N1J_T3aZ8l&key=AIzaSyB6rAyis1rjqO7ch1ZS-Z3kCU5SJKnRmVc")

    //   .then(response => response.json())
    //   .then(jsonData => video = jsonData.items)
    //   .catch(err => console.log(err));


    useEffect(()=>{
        const fetchData = async () =>{
            const result = await Axios("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLhIJgpRusByNX2XARV4jJ29N1J_T3aZ8l&key=AIzaSyB6rAyis1rjqO7ch1ZS-Z3kCU5SJKnRmVc")
            const response =await fetch(URL);
            setVideo(result.data);
            console.log(result.data.items);
            // console.log(result.data.items.collecton);
        }
        if (video){
            setLoading(false);
        }
        const timer = setTimeout(()=>{
            !video && fetchData();
        },1000);

        return () => clearTimeout(timer);
    }, [video]);
    
  
     return(
        loading ? <h3>Loading . . .</h3> :
        <div className={style.AdhdVideo}>
            
                <section className={style.adhdsection}>
                  <div className={style.AdhdVideosContainer}>
                    {/* <h1>title:{video.items[6].title}</h1> */}
                    {/* <iframe id="video"  >video: src={video.items[6].videoId}</iframe> */}
                    <h1 id="adhdtips">How to ADHD</h1>
                    <iframe id="vid1"width="560" height="315" src="https://www.youtube.com/embed/ALJ3CFRRZpo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe id="vid2"width="560" height="315" src="https://www.youtube.com/embed/cQH28TVJBVQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/s_P6sNFjLzI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/H4YIHrEu-TU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EMpt40zNK-w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bWoYiTedxK4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xMWtGozn5jU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Uo08uS904Rg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hlObsAeFNVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vlwmfiCb-vc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2SFB8BTfAG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R634ytgt7fw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TvuIZxsD-T8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9Aq7RNaB0DQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YsREaxPHlZU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dmeE3qTJRUw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8oF0qaDDMQI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8CvODrpfnaA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wFCKa9CVzGU?start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div ></section>

                    <section className={style.adhdtedxSections}>
                    <div className={style.adhdTedx}>
                    <h2 id="tedtalk">Tedx Talks</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JiwZQNYlGQI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fWCocjh5aK0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mEI_39C5E2o?start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div></section>

                     <section className={style.adhdorgSection}>
                    <div className={style.adhdorganize}>
                     <h2 id="organization"> Organize With ADHD HGTV CLUTTERBUG</h2>
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/5M5IKj2WYWQ?start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/hYtiQhCJ574?start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div></section>
                  
                   
                
            
        </div>
    );
}
export default AdhdVideos;