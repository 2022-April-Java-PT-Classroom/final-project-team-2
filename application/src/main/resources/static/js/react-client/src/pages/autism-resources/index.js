import React, {useEffect, useState} from "react";
import style from './style.module.scss';
import axios from "axios";


const AutismResources =()=>{
    const [loading, setloading] = useState(true),
    [autismBookData, setAutismBookData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
      const result = await axios.get('api/autismbook');
      setAutismBookData(result.data);
  }
  fetchData()
}, []); 

const
    [autismWebsiteData, setAutismWebsiteData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
      const result = await axios.get('api/autismwebsite');
      setAutismWebsiteData(result.data);
  }
  fetchData()
}, []);



  return(
   <div className={style.autismresources}>
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
export default AutismResources;