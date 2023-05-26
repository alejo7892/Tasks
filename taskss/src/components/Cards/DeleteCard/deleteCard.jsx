import { useState } from "react";
import { taskDelete } from "../../../API";


const DeleteCard = () =>{
    const [title,setTitle]=useState("")
    const handleonSubmit = async (e) =>{
        e.preventDefault();
        const responseD = await taskDelete({
            title: title,
          });
           
          
    } 
    

    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
    
        <form onSubmit={handleonSubmit} style={{
          background: "salmon",
          padding: "9px",
          width: "250px",
          borderRadius: "30px",
        }}>
            <h1>eliminar tarea</h1>

            <input type="text" placeholder="ingrese la tarea a eliminar"  style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
          }} value={title}
          onChange={(evento) => setTitle(evento.target.value)}/>
          
        <br /> <br />
        <button type="submit" style={{
            borderRadius: "15px",
            border: "none",
            width: "80px",
            height: "30px",
            color: "salmon",
          }}>Enviar</button>


        </form>
      </div>
    )
}

export default DeleteCard