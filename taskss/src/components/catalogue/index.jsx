import { useState } from "react";
import { createArticle } from "../../API";
const Catalogue = () =>{
    const [imageC,setImageC] = useState("")
     const [titleC,setTitleC] = useState("")
     const [descriptionC,setDesciptionC] = useState("")
     const [precio,setPrecio] = useState("")

     const handleonSubmit =  async (e) =>{
        e.preventDefault();
    const response = await createArticle ({
        imagen : imageC,
        title : titleC,
        description : descriptionC,
        precio : precio,
   
       }) 
       
       
     }
     

    return (

        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
 
        <div
          style={{
            background: "salmon",
            width: "17%",
            borderRadius: "25px",
            padding: "15px",
            position: "center",
          }}
        >
          
          
  
          <form onSubmit={handleonSubmit} style={{textAlign:'center'}}>
          <h1 style={{ color: "white", fontFamily: "cursive" }}>Crear articulo</h1>
            <input
              type="text"
              required
              placeholder="ingrese la imagen por url"
              style={{
                padding: "10px",
                borderRadius: "15px",
                border: "1px solid #aaa",
                margin: "5px",
              }}
              value={imageC}
              onChange={(event) => setImageC(event.target.value)}
            />
            <br />
            <input
              type="text"
              
              required
              placeholder="ingrese el titulo del articulo"
              style={{
                padding: "10px",
                borderRadius: "15px",
                border: "1px solid #aaa ",
                margin: "5px",
              }}
              value={titleC}
              onChange={(event) => setTitleC(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="ingrese la descripcion del articulo"
              style={{
                padding: "10px",
                borderRadius: "15px",
                border: " solid 1px #aaa",
                margin: "5px",
              }}
              value={descriptionC}
              onChange={(event) => setDesciptionC(event.target.value)}
            />
            <br />
            <input
              type="number"
              
              required
              placeholder="ingrese el precio del articulo"
              style={{
                padding: "10px",
                borderRadius: "15px",
                border: "solid 1px #aaa",
                margin: "5px",
              }}
              value={precio}
              onChange={(event) => setPrecio(event.target.value)}
            />
            <br /> <br />
            <button
              type="submit"
              style={{
                background: "white",
                borderRadius: "15px",
                border: "none",
                padding: "9px",
                width: "100px",
                color: "salmon",
              }}
            >
              enviar
            </button>
          </form>
        </div>
      </div>    
    )
}

export default Catalogue