import {pool} from '../db.js';

export const registro = async (req, res) =>{
    const {nombre,telefono,email,password}=req.body
 try {
    const [result] = await pool.query(
        "INSERT INTO usuario(nombre,numero,correo,contraseña) VALUES(?,?,?,?)", [nombre,telefono,email,password]
        
    )
    if (result.affectedRows>0) {
     return    res.json('bien insertado')
    }else{
     return    res.json('error al insertar')
    }
 } catch (error) {
    console.log(error);
    res.json('mal')
 }
}

export const login = async (req,res) =>{
 const {email,password}=req.body

 try {
   const [result] = await pool.query(
    "SELECT * FROM usuario WHERE correo= ? AND contraseña = ?", [email,password]
   )
   if (result.length !=0) {
   return res.json("logueado")
   }else{
   return res.json("No logueado")
   }
 } catch (error) {
    console.log(error);
 }
}