import React, {useState} from "react";

import Card from "./card";
import  style from './style.module.scss'

function AppCard(){

    const [emoji,setEmoji] = useState('emoji');
    const [childName, setJob] = useState('name');
    const [advice, setBody] = useState('advice');
    
    return(
        <div className={style.appReport}>
            <Card emoji={'🙁'} childName={'Joe'} advice={'Time to spend time with Jon'}/>
            <Card emoji={'🤐'} childName={'Joe'} advice={'Time to build confidence'}/>
                        
        </div>
    )
}

export default AppCard;