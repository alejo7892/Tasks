import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Registro from "./components/Forms/RegistroUsuario";
import Login from "./components/Forms/LoginUsuario";
import CreateCard from "./components/Cards/CreateCard/createCard";
import UpdateCard from "./components/Cards/UpdateCard/updateCard";
import DeleteCard from "./components/Cards/DeleteCard/deleteCard";

const App = () => {
  
  const [forms, setForms] = useState(true);

  return (
    <>
  {/* <CreateCard></CreateCard> */}
  {/* <UpdateCard></UpdateCard> */}
  <DeleteCard></DeleteCard>
    <>
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
    </>
    </>
  );
  
};

export default App;
