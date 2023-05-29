import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Registro from "./components/Forms/RegistroUsuario";
import Login from "./components/Forms/LoginUsuario";
import CreateCard from "./components/Cards/CreateCard";
import UpdateCard from "./components/Cards/UpdateCard";
import DeleteCard from "./components/Cards/DeleteCard";
import CardTasks from "./components/Cards/CardTasks";
import ListUsers from "./components/Cards/Users";
import Catalogue from "./components/catalogue";
import Cookie from "universal-cookie";

const App = () => {
  const [forms, setForms] = useState("sing up");
  const [nombre,setNombre]=useState("")
  const cookie= new Cookie();
  

useEffect(()=>{
  
setNombre(cookie.get('nombreCookie'))


},[nombre])

  

  const menu = () => {
   
  if (nombre=='' || nombre==undefined) {
    switch (forms) {
      case "sing up":
        return <Registro  />;

      case "sing in":
        return <Login  />;
    
      default:
        break;
    }
  }

    

    switch (forms) {
        case "create tasks":
        return <CreateCard  />;

      case "update tasks":
        return <UpdateCard />;
      case "delete tasks":
        return <DeleteCard />;
      case "see tasks":
        return <CardTasks />;
        case "list users":
        return <ListUsers />;
        case "create article":
          return <Catalogue />;
          case "show articles":
            return "articulos"
      default:
        break;
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            border: "3px salmon solid",
            borderRadius: "20px",
            width: "80%",
            padding: "5px",
          }}
        >

         {nombre=='' || nombre==undefined  ? 
         <>
         <li
            
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setForms("sing up")}
          >
            sing up
          </li>
          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setForms("sing in")}
          >
            sing in
          </li>
          </>   : ""}

          
          
          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setForms("create tasks")}
          >
            create tasks
          </li>
          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setForms("update tasks")}
          >
            update taks
          </li>
          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setForms("delete tasks")}
          >
            delete tasks
          </li>

          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={()=> setForms("see tasks")}
          >
            ver mis tareas
          </li>
          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={()=> setForms("list users")}
          >
            ver usuarios
          </li>
          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={()=> setForms("create article")}
          >
            crear articulo
          </li>

          <li
            style={{
              listStyle: "none",
              border: "2px solid #fff",
              background: "salmon",
              borderRadius: "20px",
              padding: "6px",
              width: "7%",
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={()=> setForms("show articles")}
          >
            mostrar articulos
          </li>
        </ul>
        {nombre=='' || nombre==undefined  ?  'bolas' : nombre}
      </div>

      {/* <CreateCard/>*/}
      {/* <UpdateCard/> */}
      {/* <DeleteCard/> */}

      {/* {forms == true ? <Login /> : <Registro />}
      {forms == true ? (
        <button
          style={{
            borderRadius: "15px",
            border: "none",
            width: "80px",
            height: "30px",
            color: "#fff",
            background: "salmon",
            marginTop: "10px",
          }}
          onClick={() => setForms(false)}
        >
          registro
        </button>
      ) : (
        <button
          style={{
            borderRadius: "15px",
            border: "none",
            width: "80px",
            height: "30px",
            color: "salmon",
            margin: "10px",
          }}
          onClick={() => setForms(true)}
        >
          login
        </button>
      )} */}
      {menu()}
    </>
  );
};

export default App;
