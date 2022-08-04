import React, {useEffect, useState} from "react";
import style from './style.module.scss';
import axios from "axios";


const AdhdResources =()=>{

    const [loading, setloading] = useState(true),
          [adhdBookData, setAdhdBookData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('api/adhdbook');
            setAdhdBookData(result.data);
        }
        fetchData()
    }, []); 

    const
          [adhdWebsiteData, setAdhdWebsiteData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('api/adhdwebsite');
            setAdhdWebsiteData(result.data);
        }
        fetchData()
    }, []);

  

        return(
         <div className={style.adhdresources}>
            <section className={style.bookSection}>
                 <div>
                     <h1>Books</h1>
                    </div>
            </section>
            <section className={style.websiteSection}>
                 <div>
                     <h1>Websites</h1>
                    </div>
            </section>
        </div>
    );
}
export default AdhdResources;