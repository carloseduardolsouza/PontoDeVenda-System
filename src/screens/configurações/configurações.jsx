// Arquivo: Configurações.js

import "./configurações.css";
import ConfiguraçõesEmpresa from "../../components/ConfiguraçõesEmpresa/ConfiguraçõesEmpresa";
import Preferencias from "../../components/Preferencias/Preferencias";
import { useState } from "react";

function Configurações() {
  const [preferencias, setPreferencias] = useState(false);

  const showNotification = () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("Estoque Mínimo Atingido", {
          body: "seu estoque de 'COMODA CAPRI' esta muito baixo",
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Estoque Mínimo Atingido", {
              body: "seu estoque de 'COMODA CAPRI' esta muito baixo",
            });
          }
        });
      }
    } else {
      console.log("Este navegador não suporta notificações.");
    }
  };

  return (
    <div id="configurações">
      <h2>Configurações</h2>
      <header>
        <p onClick={() => setPreferencias(false)}>Empresa</p>
        <p onClick={() => setPreferencias(true)}>Preferências</p>
      </header>
      {preferencias ? <Preferencias /> : <ConfiguraçõesEmpresa />}
      <button onClick={showNotification}>Notificação</button>
    </div>
  );
}

export default Configurações;
