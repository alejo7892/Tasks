import axios from "axios";



export const registrarUsuario=async(form)=>{
  return  await axios.post('http://localhost:4000/registroUsuario',form)
}
export const loginUsuario=async(form)=>{
  return await axios.post('http://localhost:4000/loginUsuario',form)
}
export const createCard=async(form)=>{
  return await axios.post('http://localhost:4000/tasks',form)
}
export const updateTasks=async(form)=>{
  return await axios.put('http://localhost:4000/taskUpdate',form)
}
export const taskDelete=async(parametro)=>{
  return await axios.delete(`http://localhost:4000/taskDelete/${parametro}`)
}
export const cardTask= async()=>{
  return await axios.get('http://localhost:4000/tasksShow')
}