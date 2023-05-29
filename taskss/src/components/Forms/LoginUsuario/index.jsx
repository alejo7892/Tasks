import { useState } from "react";
import { loginUsuario } from "../../../API";
import Cookie from "universal-cookie";







const Login = () => {
  const cookie= new Cookie();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hola,setHola]=useState(true)
  const [nombre,setNombre]=useState("")
  const handleonSubmit = async (e) => {
    e.preventDefault();
    const responseL = await loginUsuario({
      email: email,
      password: password,
    });
    if (responseL.data[0].correo== email) {
    cookie.set('correoCookie', responseL.data[0].correo, { path: '/' }); 
    cookie.set('numeroCookie', responseL.data[0].numero, {path : '/'});
    cookie.set('nombreCookie', responseL.data[0].nombre, {path : '/'});
    setNombre(cookie.get('nombreCookie'))

    }else{
      alert("no logueado")
    }
    console.log(responseL.data[0]);
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
          textAlign:'center'
        }}
      >
        <h1 style={{ color: "#fff" }}>Login</h1>
        <p>{nombre}</p>
        <input
          type="email"
          placeholder="correo electronico"
          style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
          }}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="contraseña"
          style={{
            padding: "9px",
            borderRadius: "10px",
            border: "1px solid #aaa",
            margin: "5px",
          }}
          value={password}
          onChange={(evento) => setPassword(evento.target.value)}
        />
        <br /> <br />
        <button
          type="submit"
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
      </form>
      {/* {hola==true ? "hola" : 'adios'}
      <button onClick={()=>setHola(true)}>regis</button>
      <button onClick={()=>setHola(false)}>logu</button> */}
    </div>
  );
};
export default Login;
