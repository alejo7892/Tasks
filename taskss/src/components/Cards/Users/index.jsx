import { useState,useEffect } from "react";
import { getUsers } from "../../../API";
const ListUsers = () =>{
    const [users,setUsers] =useState([])
    useEffect(()=>{

        const listLoad=async()=>{
           const response=await getUsers()
           
           setUsers(response.data)
        }
        
    
        listLoad()
    
    
    
        },[])
    return(
    <>
    {users.length != 0 ? (
        users.map((users,i)=>{
            return(
                <div key={i} style={{border:'solid 2px salmon',margin:'20px',width:'40%',borderRadius:'20px '}}>
                <h1 >{users.nombre}</h1>
                <h1>{users.numero}</h1>
                <h1>{users.correo}</h1>
                <h1>{users.contraseña}</h1>
                
                </div>
            )
        })
    ) : null} 
    
    </>
    )
}

export default ListUsers