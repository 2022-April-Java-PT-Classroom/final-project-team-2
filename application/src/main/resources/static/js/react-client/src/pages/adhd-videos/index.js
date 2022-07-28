import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Axios  from "axios";
// import gapi from "gapi"



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
            setVideo(result.data);

            console.log(result.data.items);
        }
        if (video){
            setLoading(false);
        }
        const timer = setTimeout(()=>{
            !video && fetchData();
        },500);

        return () => clearTimeout(timer);
    }, [video]);
  
     return(
        loading ? <h3>Loading . . .</h3> :
        <div className={style.AdhdVideo}>
            
                <section>
                  <div className={style.AdhdVideosContainer}>
                    <iframe id="video"  >video: src={video.videoId}</iframe>
                     <h1 id="title">title: {video.title}</h1>
                    </div>
                </section>
            
        </div>
    );
}
export default AdhdVideos;