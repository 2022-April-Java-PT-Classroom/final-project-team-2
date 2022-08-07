import React, {useEffect, useState} from "react";
import style from './style.module.scss';
import Axios from "axios";


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
                <div className={style.bookSection}>
                    <h1>Book Section</h1>
                    {autismbookData.map(autismbook =>
                        <div className={style.bookText}>
                        <h2>{autismbook.title}</h2>
                        <h3>{autismbook.author}</h3>
                        </div>
                        )}
                </div>
                <div className={style.websiteSection}>
                    <h1>Website Section</h1>
                    {autismwebsiteData.map(autismwebsite =>
                        <div className={style.bookText}>
                        <h2>{autismwebsite.title}</h2>
                        <h3>{autismwebsite.url}</h3>
                        </div>
                        )}
                </div>
            </div>
        )     
}
export default AutismResources;