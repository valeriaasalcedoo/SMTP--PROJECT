import { useState } from "react";
import { solicitud } from "../../../utils/fetchWrapper";
import "../css/ComposeModal.css";

const ComposeModal = ({ onClose }) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSend = async () => {
    console.log("Enviando mensaje:", { to, subject, message, file });
    try {
      const response = await solicitud.post({
        endpoint: "mail/sendMail",
        body: { to, subject, message, file },
      })
      const data = await response.json();
      console.log(data);
      if(!response.ok){
        setError(data.error);
        return;
      }
      alert("Mensaje enviado correctamente");
      onClose();
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <div className="modal-overlay">
      <div className="compose-modal">
        <div className="modal-header">
          <h2>Nuevo Mensaje</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="input-group">
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
            <label>Para</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <label>Asunto</label>
          </div>
          <textarea
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="file"
            className="file-input"
            onChange={handleFileChange}
          />
        </div>
        <div className="modal-footer">
          <button className="send-button" onClick={handleSend}>
            Enviar
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>

    </div>
  );
};

export default ComposeModal;
