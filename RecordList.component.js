import { DataSnapshot, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { firebaseDatabase } from "C:/Users/Meghana A/Desktop/react/day5/auth/src/backend/firebasehandler.js";
import 'C:/Users/Meghana A/Desktop/react/day5/auth/src/RecordList/RecordList.styles.css';

const RecordList = () => {

     const [studentList,  setstudentList] = useState([]);

     useEffect(() => {  
         const fetchData = async () => {
             const studentRef = ref(firebaseDatabase, 'STUDENT_RECORDS');
             onValue(studentRef, (DataSnapshot) => {
                 if (DataSnapshot.exists()) {
                     const tempVal = DataSnapshot.val();
                     console.log(Object.values(tempVal))

                     const temp = [];
                     for (const usn in DataSnapshot.val()) {
                         const student = DataSnapshot.child(usn).val();
                         temp.push(student);
                     }
                     setstudentList(temp);
                 }else{
                     alert("No records found")
                 }
             })
         }
         fetchData()
     }, []);

     return (
         <div>
             <h1> List of students</h1>
             <div className="grid-container">
                 {
                     studentList.map((item) => {
                         return (
                             <div className="grid-content">
                                 <h3>{item.name}</h3>
                                 <p>{item.usn}</p>
                                 </div>
                         )
                     })
                 }
             </div>
         </div>
     )
}

export default RecordList;