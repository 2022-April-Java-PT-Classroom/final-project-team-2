import React, {useEffect, useState} from "react";

import Axios from 'axios';
import Dragon from '../../assets/movies/Dragon.jpg'
import Up from '../../assets/movies/Up.jpg'
import iamsam from '../../assets/movies/iamsam.jpg'
import style from './style.module.scss'
import templegrandin from '../../assets/movies/templegrandin.jpg'

// import ReactSwitch from "react-switch";

// const randomNum = Math.floor((Math.random() * 10));
const QuotesAPI = () => {
    const [quotes, setQuotes] = useState(null);
    const [uploading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchQuotesData = async () => {
            const result = await Axios('http://localhost:8080/pages/quotes');
            setQuotes(result.data);
            console.log(result.data);
        }
        if (quotes) {
            setLoading(false);
        }
        const timer = setTimeout(() => {
            !quotes && fetchQuotesData();
            
        }, 250);
        return () => clearTimeout(timer);
        //eslint-disable-next-line
    }, [quotes]);
    
    return (
        <div className={style.quotesDiv}>
        {uploading ? <h2>Uploading!</h2> :
        
        <div className={style.quotes_shadowbox}>
            <section className={style.quotesSection}>
                <div className={style.quotesText}>
                    <h3>Quote of the Day...</h3>
                    <div className={style.quotesGrid} key={quotes.id}>
                    {quotes.map(quotes => (
                            <div>
                            <h1 className={style.quote__author_name}>{quotes.name}</h1>
                            <img className={style.quote__author_pic} src={quotes.imageUrl} alt=""></img>
                            <p className={style.quote_summary}>{quotes.summary}</p>
                            </div>
                    ))}
                    </div>
                </div>
            </section>
            <section className={style.moviesSection}>
                <div className={style.moviesText}>
                <h3>Positive Neurodivergent Movies</h3>
                <div className="Mymovies slide">
                    <img src={Up} alt={"up_movie"}></img>
                    <img src={Dragon} alt={"dragon_movie"}></img>
                    <img src={iamsam} alt={"i_am_sam"}></img>
                    <img src={templegrandin} alt={"temple_grandin"}></img>
                </div>
                </div>
            </section>
        </div>
        }
        </div>
    )
}

export default QuotesAPI;