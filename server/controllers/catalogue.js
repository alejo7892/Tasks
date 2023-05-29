import {pool} from '../db.js';

export const catalogue =  async (req,res ) =>{  
try {
    const {imagen,title,description,precio }= req.body
const result = await pool.query(
    "INSERT INTO catalogue(imagen,title,descriptionA,precio) VALUES (?,?,?,?)",[imagen,title,description,precio],

res.json("ejecutado")
)
} catch (error) {
   res.json(error)
}

}
export const showarticles = async (req,res) =>{
    try {
     const result = await pool.query(
        "SELECT * FROM catalogue"
     )
     res.json(result)   
    } catch (error) {
        console.log(error);
    }
}


