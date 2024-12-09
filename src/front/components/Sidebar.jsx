import React, { useState } from "react";
import "../css/Sidebar.css";

const Sidebar = ({ setSelectedContent }) => {
  const [selected, setSelected] = useState("Bandeja de Entrada");

  const handleSelection = (content) => {
    setSelected(content);
    setSelectedContent(content);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div
          className={`sidebar-item ${
            selected === "Bandeja de Entrada" ? "selected" : ""
          }`}
          onClick={() => handleSelection("Bandeja de Entrada")}
        >
          Bandeja de Entrada
        </div>
        <div
          className={`sidebar-item ${
            selected === "Bandeja de Salida" ? "selected" : ""
          }`}
          onClick={() => handleSelection("Bandeja de Salida")}
        >
          Bandeja de Salida
        </div>
        <div className="glider-container">
          <div className="glider"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
