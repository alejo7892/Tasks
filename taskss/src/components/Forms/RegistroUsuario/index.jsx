import { useState } from "react";
import { registrarUsuario } from "../../../API";

const registro = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const gg = async (e) => {
    e.preventDefault();

    const response = await registrarUsuario({
      nombre: name,
      telefono: phone,
      email: email,
      password: password,
    });
    console.log(response.data);
    alert("Registrado");
  };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "salmon",
          width: "30%",
          borderRadius: "25px",
          padding: "15px",
          position: "center",
        }}
      >
        <h1 style={{ color: "white", fontFamily: "cursive" }}>Registro</h1>

        <form onSubmit={gg}>
          <input
            type="text"
            id="nombre"
            required
            placeholder="ingrese su nombre"
            style={{
              padding: "10px",
              borderRadius: "15px",
              border: "1px solid #aaa",
              margin: "5px",
            }}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <input
            type="number"
            id="numero"
            required
            placeholder="ingrese su numero de telefono"
            style={{
              padding: "10px",
              borderRadius: "15px",
              border: "1px solid #aaa ",
              margin: "5px",
            }}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <br />
          <input
            type="email"
            id="email"
            placeholder="ingrese su correo"
            style={{
              padding: "10px",
              borderRadius: "15px",
              border: " solid 1px #aaa",
              margin: "5px",
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            type="password"
            id="contraseña"
            required
            placeholder="ingrese su contraseña"
            style={{
              padding: "10px",
              borderRadius: "15px",
              border: "solid 1px #aaa",
              margin: "5px",
            }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
  );
};

export default registro;
