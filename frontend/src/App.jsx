import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState(""); // mensaje único

  const llamarApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMensaje(data.mensaje); // reemplaza cualquier mensaje anterior
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Práctica HTTPS</h1>

      <div className="botones">
        <button onClick={() => llamarApi("/api/saludo")}>Saludo</button>
        <button onClick={() => llamarApi("/api/despedida")}>Despedida</button>
        <button onClick={() => llamarApi("/api/servidor")}>Servidor</button>
      </div>

      {/* Mensaje único debajo de los 3 botones */}
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default App;
