import React, {useState} from "react";

import Card from "./card";
import  style from './style.module.scss'

function AppCard(){

    const [emoji,setEmoji] = useState('emoji');
    const [childName, setJob] = useState('name');
    const [advice, setBody] = useState('advice');
    
    return(
        <div className={style.appReport}>
            <div><h1>This is how your'e kid is doing</h1></div>
            <Card emoji={'🙁'} childName={'Joe'} advice={'Time to spend some quality time'}/>
            <Card emoji={'🤐'} childName={'Joe'} advice={'Time to build confidence'}/>
            <Card emoji={'😁'} childName={'Sam'} advice={'This is so fun'}/>
            <Card emoji={'🤢'} childName={'Joe'} advice={'Time to visit the doctor'}/>
                        
        </div>
    )
}

export default AppCard;