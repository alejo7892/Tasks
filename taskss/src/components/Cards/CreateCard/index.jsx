import { useState } from "react";
import "../../../App.css";
import { createCard } from "../../../API";
const CreateCard = ({nombre}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleonSubmit = async (e) => {
    e.preventDefault();
    const responseC = await createCard({
      title: title,
      description: description,
    });
    if (responseC.data == "hecha") {
      alert("tarea hecha");
    } else {
      alert("tarea no hecha");
    }

    console.log(responseC);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleonSubmit}
        style={{
          background: "salmon",
          padding: "9px",
          width: "250px",
          borderRadius: "30px",
        }}
      >
        {nombre}
        <h1 style={{ color: "#fff", textAlign: "center" }}>crear carta</h1>
        <input
          type="text"
          placeholder="ingrese el titulo de la tarea"
          style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
            width: "90%",
          }}
          value={title}
          onChange={(evento) => setTitle(evento.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese la descripcion de la tarea"
          style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
            width: "90%",
          }}
          value={description}
          onChange={(evento) => setDescription(evento.target.value)}
        />
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              borderRadius: "15px",
              border: "none",
              width: "80px",
              height: "30px",
              color: "salmon",
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCard;
