import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/Panel.css";
import ComposeModal from "./ComposeModal";
import MailPreview from "./MailPreview";
import { solicitud } from "../../../utils/fetchWrapper";

const mockEmails = [
  {
    id: 1,
    sender: "Kyle From Web Dev S.",
    subject: "Is CSS Simplified Right For You?",
    body: "Hi Idiar, Do any of these sound like you? You want to land a high-paying job as a web developer...",
    timestamp: "2024-12-10 10:30:00",
  },
  {
    id: 2,
    sender: "GitGuardian",
    subject: "[idiar/backendSMTP] MongoDB URI exposed on GitHub",
    body: "GitGuardian has detected the following MongoDB URI in your repository...",
    timestamp: "2024-12-09 15:45:00",
  },
];
const mockSentEmails = [
  {
    id: 1,
    sender: "Tú",
    subject: "Reunión confirmada",
    body: "Hola equipo, la reunión está confirmada para mañana a las 10 AM...",
    timestamp: "2024-12-10 09:00:00",
  },
  {
    id: 2,
    sender: "Tú",
    subject: "Entrega del proyecto",
    body: "El proyecto estará listo para su entrega el próximo lunes...",
    timestamp: "2024-12-09 14:30:00",
  },
];

const Panel = () => {
  const [selectedContent, setSelectedContent] = useState("Bandeja de Entrada");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await solicitud.post({ endpoint: "logout" });
      const data = await response.json();
      if (response.ok) {
        alert("Sesión cerrada correctamente");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="panel-container">
      <div className="smtp-title">SMTP</div>
      <button className="redactar-button" onClick={() => setIsModalOpen(true)}>
        Redactar
        <svg className="svg" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
        </svg>
      </button>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="panel-body">
        <Sidebar setSelectedContent={setSelectedContent} />
        <div className="main-container">
        <div className="content">
  {selectedContent === "Bandeja de Entrada" ? (
    <>
      <h2 className="inbox-title">{selectedContent}</h2>
      <ul className="email-list">
        {mockEmails.map((email) => (
          <li
            key={email.id}
            className="email-item"
            onClick={() => setSelectedEmail(email)}
          >
            <div className="email-sender">{email.sender}</div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-preview">{email.body.substring(0, 50)}...</div>
          </li>
        ))}
      </ul>
    </>
  ) : selectedContent === "Bandeja de Salida" ? (
    <>
      <h2 className="inbox-title">{selectedContent}</h2>
      <ul className="email-list">
        {mockSentEmails.map((email) => (
          <li
            key={email.id}
            className="email-item"
            onClick={() => setSelectedEmail(email)}
          >
            <div className="email-sender">{email.sender}</div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-preview">{email.body.substring(0, 50)}...</div>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>Aquí se mostrará el contenido relacionado con la selección del Sidebar.</p>
  )}
  <button onClick={handleLogout}>Cerrar Sesión</button>
</div>

        </div>
      </div>
      {selectedEmail && (
        <MailPreview email={selectedEmail} onClose={() => setSelectedEmail(null)} />
      )}
      {isModalOpen && <ComposeModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Panel;
