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

export const deleteTask = async (req, res) => {
  const {title}=req.params
  const [result] = await pool.query(
    "DELETE FROM tasks WHERE title = ?", [title]
  )
  if (result.affectedRows!=0) {
      return res.json('delete ok')
  }else{
    return res.json("no delete")
  }

};
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks"
    )
    return res.json(result)
  } catch (error) {
    console.log(error);
  }
};
export const getUsers =  async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM usuario"
    )
   return res.json(result)
  } catch (error) {
    console.log(error);
  }
  
};
