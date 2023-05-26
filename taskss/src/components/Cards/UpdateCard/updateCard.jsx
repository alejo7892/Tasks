import { useState } from "react";
import { updateTasks } from "../../../API";

const UpdateCard = ()=>{
    const [titleS,setTitleS]=useState("")
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
   const handleonSubmit = async (e)=>{
    e.preventDefault()
    const responseU = await updateTasks({
        titleS:titleS,
        title: title,
        description: description,
      });
      console.log(responseU);
   }


    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
    
        <form onSubmit={handleonSubmit} style={{
          background: "salmon",
          padding: "9px",
          width: "250px",
          borderRadius: "30px",
        }}>
            <h1>actualizar tarea</h1>

            <input type="text" placeholder="ingrese la tarea a actualizar"  style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
          }} value={titleS}
          onChange={(evento) => setTitleS(evento.target.value)}/>


        <input type="text" placeholder="ingrese el titulo de la tarea"  style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
          }} value={title}
          onChange={(evento) => setTitle(evento.target.value)}/>
        <br /> 
        <input type="text" placeholder="ingrese la descripcion de la tarea" style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
          }} value={description}
          onChange={(evento) => setDescription(evento.target.value)}/>
        <br /> <br />
        <button style={{
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

export default UpdateCard