import {pool} from '../db.js';

export const catalogue =  async (req,res ) =>{  
try {
    const {imageC,titleC,descriptionC,precio }= req.body
const result = await pool.query(
    "INSERT INTO catalogue(imagen,title,descriptionA,precio) VALUES (?,?,?,?)",[imageC,titleC,descriptionC,precio],

res.json("ejecutado")
)
} catch (error) {
   res.json(error)
}

}
