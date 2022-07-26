import React, {useEffect, useState} from "react";

import Axios from 'axios';
import style from './style.module.scss';

// import ReactSwitch from "react-switch";


const QuotesAPI = () => {
    const [quotes, setQuotes] = useState(null);
    const [uploading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuotesData = async () => {
            const result = await Axios('http://localhost:8080/pages/quotes');
            setQuotes(result.data);
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
        uploading ? <h2>Uploading!</h2> :

        <div>
            <section className={style.quotesSection}>
                <div className={style.quotesText}>
                    <h3>Quote of the Day...</h3>
                    {quotes.map(quotes => (
                        <div key={quotes.id}>
                            <h1 className="quote__author_name">{quotes.name}</h1>
                            <p className="quote_summary">{quotes.summary}</p>
                            </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default QuotesAPI;