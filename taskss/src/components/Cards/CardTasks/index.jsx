import { useState,useEffect } from "react";
import CreateCard from "../CreateCard";
import {cardTask} from "../../../API"
const CardTasks = ()=>{
   const [tasks,setTasks] =useState([])

    useEffect(()=>{

    const tasksLoad=async()=>{
       const response=await cardTask()
       
       setTasks(response.data)
    }
    

    tasksLoad()



    },[])
    return(
        <>
       
       {tasks.length!=0 ? (
        tasks.map((task,i)=>{
            return(
                <div style={{display:'flex',}}>
                <div key={i} style={{border:'2px solid black',width:'9%', borderRadius:'30px',padding:'20px',margin:'10px'}}>
                <h1 style={{color:'red'}}>{task.title}</h1> 
                <p>{task.description}</p>
                </div>
                </div>
                
            )
        })
       ) : null}
     
    
        </>
    )
}

export default CardTasks