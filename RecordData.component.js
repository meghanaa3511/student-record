import { firebaseDatabase } from "C:/Users/Meghana A/Desktop/react/day5/auth/src/backend/firebasehandler.js";
import {ref,set} from 'firebase/database';
import React, { useState } from "react";
import { async } from '@firebase/util';
import 'C:/Users/Meghana A/Desktop/react/day5/auth/src/RecordData/Record.styles.css'
const RecordData=()=>{
    const[stuData,setStuData] =useState({
        name:"",
        usn:""
    })
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setStuData({
            ...stuData,
            [name]:value
        })
    }
    const handleSave=async()=>{
        const recordref=ref(firebaseDatabase,`STUDENT_RECORDS/${stuData.usn}`);
        await set(recordref,stuData);
        alert("data created")
    };

    return(
        <div className ="container">
                <div className="input-container">
            <input className="inputs" placeholder='Student Name' name ='name' value={stuData.name} onChange={handleChange}/>
            <input className="inputs" placeholder='Student USN' name ='usn' value={stuData.usn} onChange={handleChange}/>
            <button className="button-save" onClick={handleSave}>save</button></div>
        </div>
    )
}
export default RecordData;
