import { pool } from "../db.js";
export const createTasks = async (req, res) => {
  const { title, description }= req.body
  const result = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?,?)",
    [title, description]
  )
  
  if (result.length !=0) {
    return res.json("hecha")
   }else{
    return res.json("no hecha")
   }
  
};
export const updateTasks = async (req, res) => {
  const {titleS,title,description}=req.body
  const result = await pool.query(
   "UPDATE tasks SET  title= ?, description = ? WHERE title = ?",[title,description,titleS]
  )
  
};
export const getTasks = (req, res) => {
  res.send("obteniendo tareas");
};
export const deleteTask = async (req, res) => {
  const {title}=req.body
  const result = await pool.query(
    "DELETE FROM tasks WHERE title = ?", [title]
  )
  console.log(result);  
};
export const getTask = (req, res) => {
  res.send("obteniendo tarea");
};
